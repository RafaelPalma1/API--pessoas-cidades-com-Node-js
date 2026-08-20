import * as create from "./create";
import * as read from "./read";
import * as update from "./update";
import * as delet from "./delete";

export const CidadesController = {
    ...create,
    ...read,
    ...update,
    ...delet,
};

