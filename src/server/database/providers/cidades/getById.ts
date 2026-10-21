import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';
import { ICidade } from '../../models';

export const getById = async (id: number): Promise<ICidade | Error> => {
  
    try{
        const result = await Knex(ETableNames.cidade).select('*').where('id', '=', id).first();

        if(result === undefined){
            return new Error('Registro não encontrado');
        }
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao buscar registros');
    }
};

