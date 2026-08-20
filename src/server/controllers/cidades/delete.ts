/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface ICidade {
    nome: string
}

export const delet = (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log("deu bom");
    console.log(req.body);
    return res.status(StatusCodes.NO_CONTENT).send();
};
