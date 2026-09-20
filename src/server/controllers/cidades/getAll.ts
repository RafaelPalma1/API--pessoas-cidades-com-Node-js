/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


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



  res.setHeader('x-total-count', 1);
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  console.log(req.query);

  return res.status(StatusCodes.OK).json(1);
};