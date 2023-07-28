import Registro from "../../../persistence/Registro";
import Medicao from "../../Medicao";

interface IRegistroDAO {
    buscarRegistros(idUsuario: string): Promise<Registro[]>;
    salvarRegistro(idUsuario: string, medicao: Medicao ): Promise<Registro>;
    excluirRegistro(idUsuario: string, idRegistro: string): Promise<boolean>;
    alterarRegistro(idUsuario: string, registro: Registro): Promise<Registro>;
}

export default IRegistroDAO;
