import iRoutes from './iRoutes';
import Server from '../provider/Server';
import UserController from '../controller/UserController';

class UsuarioRoutes implements iRoutes {
  controller = new UserController();

  init() {
    this.get();
    this.post();
    this.delete();
  }

  get() {
    Server.get('/user', this.controller.login);
  }

  post() {
    Server.post('/user', this.controller.registrar);
  }

  delete() { }
}

export default UsuarioRoutes;
