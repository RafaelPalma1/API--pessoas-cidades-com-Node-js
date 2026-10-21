/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';
import { CidadesProvider } from '../../database/providers/cidades';



interface IParamsProps {
    id?: number;
}

interface IbodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
    
  })),

  body: getSchema<IbodyProps>(yup.object().shape({
    nome: yup.string().required().min(3).max(100),
    estado: yup.string().required().min(3).max(100),
}))
}));

export const updateById = async (req: Request<IParamsProps, {}, IbodyProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });
  }

  const result = await  CidadesProvider.updateById(Number(req.params.id), req.body);
  
  if (Number(req.params.id) === 99999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ default: 'Registro não encontrado' });
  };

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });}

  console.log(req.params);
  console.log(req.body);


  return res.status(StatusCodes.OK).json(result);
};