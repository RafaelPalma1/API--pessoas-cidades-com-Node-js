import type { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidades';


interface IParamsProps {
    id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
    
  })),
}));

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);

  const result = await  CidadesProvider.deleteById(Number(req.params.id));


  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ default: result.message });
  }

  return res.status(StatusCodes.NO_CONTENT).send();
};