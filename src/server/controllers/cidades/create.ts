/* eslint-disable no-useless-assignment */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
    nome: string
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
    nome: yup.string().defined().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => { 
    let validateData: ICidade | undefined = undefined;

    try{
        validateData = await bodyValidation.validate(req.body);
    }catch (error){
        const yupError = error as yup.ValidationError;

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message,
            }
        });
    }

    console.log(validateData);
    return res.status(StatusCodes.CREATED).send("Created");

};

