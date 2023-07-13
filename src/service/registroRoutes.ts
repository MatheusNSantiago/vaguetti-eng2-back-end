import RegistroController from "../controller/RegistroController";
import Server from "../provider/Server";
import iRoutes from "./iRoutes";

class RegistroRoutes implements iRoutes {
    controller = new RegistroController();

    get(): void { }

    post(): void {
        Server.post("/registro", this.controller.adicionarRegistro);
    }

    delete(): void { }
}

export default RegistroRoutes;
