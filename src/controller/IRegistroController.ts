import Medicao from '../persistence/Medicao';
import Registro from '../persistence/Registro';
import { TypedRequestBody, TypedResponse } from '../utils';

export default interface IRegistroController {
  buscarRegistros(
    req: BuscarRegistrosRequest,
    res: BuscarRegistrosResponse
  ): void;
  adicionarRegistro(
    req: AdicionarRegistroRequest,
    res: AdicionarRegistroResponse
  ): void;
  excluirRegistro(
    req: ExcluirRegistroRequest,
    res: ExcluirRegistroResponse
  ): void;
  alterarRegistro(
    req: AlterarRegistroRequest,
    res: AlterarRegistroResponse
  ): void;
}

export type BuscarRegistrosRequest = TypedRequestBody<{ cpf: string }>;
export type BuscarRegistrosResponse = TypedResponse<{
  registros: Registro[];
  msgCode: 200 | 404 | 500;
  msg?: string;
}>;

export type AdicionarRegistroRequest = TypedRequestBody<{
  cpf: string;
  medicao: Medicao;
}>;
export type AdicionarRegistroResponse = TypedResponse<{
  registro: Registro | {};
  msgCode: 200 | 500;
  msg?: string;
}>;

export type ExcluirRegistroRequest = TypedRequestBody<{
  cpf: string;
  idRegistro: string;
}>;
export type ExcluirRegistroResponse = TypedResponse<{
  msgCode: 200 | 500;
  msg?: string;
}>;

export type AlterarRegistroRequest = TypedRequestBody<{
  cpf: string;
  registro: Registro;
}>;
export type AlterarRegistroResponse = TypedResponse<{
  registro: Registro | {};
  msgCode: 200 | 500 | 404;
  msg?: string;
}>;
