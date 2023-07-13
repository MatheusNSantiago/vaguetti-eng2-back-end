// TODO: perguntar se isso tipar req e res causa acoplamento

import User from "../persistence/User";
import { TypedRequestBody, TypedResponse } from "../utils";

// Porque o estamos expondo o express na criação desses DTOs
interface IUserController {
    login(req: UserLoginRequest, res: UserLoginResponse): void;
    registrar(req: UserRegistroRequest, res: UserLoginResponse): void;
}

export type UserRegistroRequest = TypedRequestBody<{
    user: User;
    senha: string;
}>;
export type UserRegistroResponse = TypedResponse<{
    user: User | {};
    msgCode: 200 | 500;
    msg?: string;
}>;


export type UserLoginRequest = TypedRequestBody<{ cpf: string; senha: string }>;
export type UserLoginResponse = TypedResponse<{
    user: User | {};
    msgCode: 200 | 404 | 500;
    msg?: string;
}>;
export default IUserController;
