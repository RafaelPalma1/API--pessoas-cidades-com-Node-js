import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers";

const router = Router();


router.get("/", (req, res) => {
    return res.status(StatusCodes.CREATED).json("hello world");
});

router.post("/cidades", CidadesController.create);

router.get("/cidades", CidadesController.read);

router.put("/cidades", CidadesController.update);

router.delete("/cidades", CidadesController.delet);

export { router };
