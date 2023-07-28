import RegistroDAOMongoose from '../persistence/DAO/registro/RegistroDAOMongoose';
import IRegistroDAO from '../persistence/DAO/registro/IRegistroDAO';
import IRegistroController, {
  AdicionarRegistroRequest,
  AdicionarRegistroResponse,
  AlterarRegistroRequest,
  AlterarRegistroResponse,
  BuscarRegistrosRequest,
  BuscarRegistrosResponse,
  ExcluirRegistroRequest,
  ExcluirRegistroResponse,
} from './IRegistroController';

// Config não funciona, por algum motivo só da pra acessar o DAOMongoose se tiver em escopo geral declarado aqui
const registroDAO: IRegistroDAO = new RegistroDAOMongoose();
class RegistroController implements IRegistroController {
  async buscarRegistros(
    req: BuscarRegistrosRequest,
    res: BuscarRegistrosResponse
  ): Promise<void> {
    const cpf = req.params.cpf

    try {
      let registros = await registroDAO.buscarRegistros(cpf);
      return res.json({ registros, msgCode: 200 });
    } catch (error) {
      return res.json({ registros: [], msgCode: 500, msg: error });
    }
  }

  async adicionarRegistro(
    req: AdicionarRegistroRequest,
    res: AdicionarRegistroResponse
  ): Promise<void> {
    const { cpf, medicao } = req.body;

    try {
      let registro = await registroDAO.salvarRegistro(cpf, medicao);
      return res.json({ registro: registro, msgCode: 200 });
    } catch (error) {
      return res.json({ registro: {}, msgCode: 500, msg: error });
    }
  }

  async excluirRegistro(
    req: ExcluirRegistroRequest,
    res: ExcluirRegistroResponse
  ): Promise<void> {
    const { cpf, idRegistro } = req.body;

    try {
      await registroDAO.excluirRegistro(cpf, idRegistro);
      return res.json({ msgCode: 200 });
    } catch (error) {
      return res.json({ msgCode: 500, msg: error });
    }
  }

  async alterarRegistro(
    req: AlterarRegistroRequest,
    res: AlterarRegistroResponse
  ): Promise<void> {
    const { cpf, registro } = req.body;

    try {
      await registroDAO.alterarRegistro(cpf, registro);
      return res.json({ registro, msgCode: 200 });
    } catch (error) {
      return res.json({ registro: {}, msgCode: 500, msg: error });
    }
  }
}

export default RegistroController;
