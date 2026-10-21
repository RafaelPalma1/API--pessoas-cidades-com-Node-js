import * as create from './create';
import * as deleteById from './deleteById';
import * as updateById from './updateById';
import * as getAll from './getAll';
import * as getById from './getById';
import * as count from './count';


export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...updateById,
    ...getAll,
    ...getById,
    ...count
};
