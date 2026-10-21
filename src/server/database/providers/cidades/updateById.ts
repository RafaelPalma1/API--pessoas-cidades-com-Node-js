import { ICidade } from '../../models';
import { Knex } from '../../knex';
import { ETableNames } from '../../ETableNames';

export const updateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
  
    try{
        const result = await Knex(ETableNames.cidade).where('id', id).update(cidade);

        if(result === 0){
            return new Error('Registro não encontrado');
        }

        return;
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao cadastrar o registro');
    }
};