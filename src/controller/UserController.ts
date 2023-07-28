import IUserController, {
  UserLoginRequest,
  UserLoginResponse,
  UserRegistroRequest,
  UserRegistroResponse,
} from './IUserController';
import IUserDAO from '../persistence/DAO/user/IUserDAO';
import UserDAOMongoose from '../persistence/DAO/user/UserDAOMongoose';

// Config não funciona, por algum motivo só da pra acessar o DAOMongoose se tiver em escopo geral declarado aqui
const userDAO: IUserDAO = new UserDAOMongoose()
class UserController implements IUserController {
  async login(req: UserLoginRequest, res: UserLoginResponse) {
    var { cpf } = req.query;

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
