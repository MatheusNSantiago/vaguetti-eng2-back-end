import User from "../../User";
import UserMongoose from "../../models/UserMongoose";
import IUsuarioDao from "./IUserDAO";

class UserDAOMongoose implements IUsuarioDao {
    async buscarUsuario(cpf: string): Promise<User | null> {
        var user = await UserMongoose.findOne({ cpf: cpf });

        if (user != null)
            return new User(user.nome, user.idade, user.cpf, user.peso, user.altura);

        return null;
    }

    async criarUsuario(usuario: User): Promise<User> {

        const user = new UserMongoose({
            nome: usuario.nome,
            idade: usuario.idade,
            cpf: usuario.cpf,
            peso: usuario.peso,
            altura: usuario.altura,
            registros: [],
        });
        await user.save();

        return usuario;
    }

    async excluirUsuario(cpf: string): Promise<void> {
        await UserMongoose.deleteOne({ cpf: cpf });
    }

    async alterarUsuario(usuario: User): Promise<User> {
        await UserMongoose.updateOne({ cpf: usuario.cpf }, usuario);
        return usuario;
    }
}

export default UserDAOMongoose;
