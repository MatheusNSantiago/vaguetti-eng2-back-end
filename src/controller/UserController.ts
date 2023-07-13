import IUserController, {
    UserLoginRequest,
    UserLoginResponse,
    UserRegistroRequest,
    UserRegistroResponse,
} from './IUserController';
import UserDAOMongoose from '../persistence/DAO/user/UserDAOMongoose';

// TODO: Ver porque userDAO está undefined (comentário), mesmo ele sendo instanciado no construtor
// Se eu instanciar ele aqui, ele funciona
const userDAO = new UserDAOMongoose();

class UserController implements IUserController {
    // userDAO: IUserDAO;

    // constructor() {
    // this.userDAO = new config.UserDAO();
    // }

    async login(req: UserLoginRequest, res: UserLoginResponse) {
        var { cpf } = req.body;

        try {
            let user = await userDAO.buscarUsuario(cpf);
            if (user != null) {
                return res.json({ user, msgCode: 200 });
            }
            return res.json({ user: {}, msgCode: 404 });
        } catch (error) {
            return res.json({ user: {}, msgCode: 500, msg: error });
        }
    }

    async registrar(req: UserRegistroRequest, res: UserRegistroResponse) {
        var { user } = req.body;

        try {
            await userDAO.criarUsuario(user);
            return res.json({ user, msgCode: 200 });
        } catch (error) {
            console.log(error);

            return res.json({ user: {}, msgCode: 500, msg: error });
        }
    }
}

export default UserController;
