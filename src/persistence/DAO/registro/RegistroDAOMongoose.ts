import Registro from '../../../persistence/Registro';
import Medicao from '../../Medicao';
import UserMongoose from '../../models/UserMongoose';
import IRegistroDAO from './IRegistroDAO';
import { v4 as uuidv4 } from 'uuid';

class RegistroDAOMongoose implements IRegistroDAO {
  async buscarRegistros(cpf: string): Promise<Registro[]> {
    const user = await UserMongoose.findOne({ cpf: cpf });

    if (user !== null) return user.registros;
    return [];
  }

  async salvarRegistro(cpf: string, medicao: Medicao): Promise<Registro> {
    const user = await UserMongoose.findOne({ cpf: cpf });
    const registro = new Registro(uuidv4(), medicao, new Date());

    if (user !== null) {
      user.registros.push(registro);
      await UserMongoose.updateOne({ cpf: cpf }, user);
    }

    return registro;
  }

  async excluirRegistro(cpf: string, idRegistro: string): Promise<boolean> {
    const user = await UserMongoose.findOne({ cpf: cpf });

    if (user !== null) {
      let registros = user.registros;
      registros = registros.filter((r) => r.idRegistro !== idRegistro);

      await UserMongoose.updateOne({ cpf, registros }, user);
      return true;
    }

    return false;
  }

  async alterarRegistro(cpf: string, registro: Registro): Promise<Registro> {
    const user = await UserMongoose.findOne({ cpf: cpf });

    if (user !== null) {
      let registros = user.registros;

      registros = registros.map((r) => {
        if (r.idRegistro === registro.idRegistro) return registro;
        return r;
      });

      await UserMongoose.updateOne({ cpf: cpf, registros: registros }, user);
    }

    return registro;
  }
}

export default RegistroDAOMongoose;
