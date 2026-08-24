"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.readValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
exports.readValidation = validation((getSchema) => ({
    query: getSchema(yup.object().shape({
        filter: yup.string().optional().min(3),
    })),
}));
const read = (req, res) => {
    console.log(req.query);
    return res.status(http_status_codes_1.StatusCodes.OK).send();
};
exports.read = read;
