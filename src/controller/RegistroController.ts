import config from '../config';
import RegistroDAOMongoose from '../persistence/DAO/registro/RegistroDAOMongoose';
import IRegistroDAO from '../persistence/DAO/registro/iRegistroDAO';
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

class RegistroController implements IRegistroController {
  registroDAO: IRegistroDAO;

  constructor() {
    this.registroDAO = new RegistroDAOMongoose();
  }

  async buscarRegistros(
    req: BuscarRegistrosRequest,
    res: BuscarRegistrosResponse
  ): Promise<void> {
    const cpf = req.body.cpf;

    try {
      let registros = await this.registroDAO.buscarRegistros(cpf);
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
      let registro = await this.registroDAO.salvarRegistro(cpf, medicao);
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
      await this.registroDAO.excluirRegistro(cpf, idRegistro);
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
      await this.registroDAO.alterarRegistro(cpf, registro);
      return res.json({ registro: registro, msgCode: 200 });
    } catch (error) {
      return res.json({ registro: {}, msgCode: 500, msg: error });
    }
  }
}

export default RegistroController;
