/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";


interface IqueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IqueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional()
    
  })),
}));

export const getAll = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {
  console.log(req.query);


  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not implemented yet");
};