import bodyParser from 'body-parser';
import express from 'express';
import { Application, RequestHandler } from 'express';
import UsuarioRoutes from '../service/usuarioRoutes';
import RegistroRoutes from '../service/registroRoutes';

class Server {
  public server: Application;

  constructor() {
    this.server = express()
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: true }));
  }

  public init(): any {
    const port = 3000;

    this.server
      .listen(port, () => {
        return console.log(
          '\x1b[33m%s\x1b[0m',
          `Server :: Running @ 'http://localhost:${port}'`
        );
      })
      .on('error', (_error) => console.log('Error: ', _error.message));

    this.mountRoutes();
  }

  private mountRoutes(): void {
    const usuarioRoutes = new UsuarioRoutes();
    usuarioRoutes.post();
    usuarioRoutes.get();

    const registroRoutes = new RegistroRoutes();
    registroRoutes.post();
  }

  public get(path: string, callback: RequestHandler) {
    this.server.get(path, callback);
  }

  public post(path: string, callback: RequestHandler) {
    this.server.post(path, callback);
  }
}

export default new Server();
