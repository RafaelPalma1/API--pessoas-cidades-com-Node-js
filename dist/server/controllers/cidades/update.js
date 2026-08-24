"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const http_status_codes_1 = require("http-status-codes");
const update = (req, res) => {
    console.log("deu bom");
    console.log(req.body);
    return res.status(http_status_codes_1.StatusCodes.OK).send();
};
exports.update = update;
