"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.CREATED).json("hello world");
});
router.post("/cidades", controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create);
router.get("/cidades", controllers_1.CidadesController.read);
router.put("/cidades", controllers_1.CidadesController.update);
router.delete("/cidades", controllers_1.CidadesController.delet);
