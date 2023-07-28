import { Request, Response } from "express";

export interface TypedRequestBody<T> extends Request {
    body: T;
    query: any;
}

export interface TypedResponse<T> extends Response {
    json(body: T): any;
}
