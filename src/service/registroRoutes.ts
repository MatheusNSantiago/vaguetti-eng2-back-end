import RegistroController from '../controller/RegistroController';
import Server from '../provider/Server';
import iRoutes from './iRoutes';

class RegistroRoutes implements iRoutes {
  controller = new RegistroController();

  init(): void {
    this.get();
    this.post();
    this.delete();
    this.patch();
  }

  get(): void {
    Server.get('/registro/:cpf', this.controller.buscarRegistros);
  }

  post(): void {
    Server.post('/registro', this.controller.adicionarRegistro);
  }

  delete(): void {
    Server.delete('/registro', this.controller.excluirRegistro);
  }

  patch(): void {
    Server.patch('/registro', this.controller.alterarRegistro);
  }
}

export default RegistroRoutes;
