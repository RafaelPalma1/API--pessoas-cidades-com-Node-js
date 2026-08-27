/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


interface IParamsProps {
    id?: number;
}

interface IbodyProps {
    nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
    
  })),

  body: getSchema<IbodyProps>(yup.object().shape({
    nome: yup.string().required().min(3).max(100),
}))
}));

export const updateById = async (req: Request<IParamsProps, {}, IbodyProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body);


  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not implemented yet");
};