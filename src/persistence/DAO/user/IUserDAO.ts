import User from "../../User";

interface IUserDAO {
    buscarUsuario(cpf: string): Promise<User | null>;
    criarUsuario(usuario: User): Promise<User>;
    excluirUsuario(cpf: string): Promise<void>;
    alterarUsuario(usuario: User): Promise<User>;
}

export default IUserDAO;
