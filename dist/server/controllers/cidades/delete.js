"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delet = void 0;
const http_status_codes_1 = require("http-status-codes");
const delet = (req, res) => {
    console.log("deu bom");
    console.log(req.body);
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
};
exports.delet = delet;
