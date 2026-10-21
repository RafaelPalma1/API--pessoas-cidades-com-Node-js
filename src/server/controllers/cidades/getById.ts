import type { Request, Response } from 'express';
import * as yup from 'yup';


import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidades';


interface IParamsProps {
    id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
    
  })),
}));

export const getById = async (req: Request<IParamsProps>, res: Response) => {

  res.setHeader('x-total-count', 1);
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  const result = await  CidadesProvider.getById(Number(req.params.id));

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ default: result.message });
  }


  console.log(req.params);


  return res.status(StatusCodes.OK).json(result);
};