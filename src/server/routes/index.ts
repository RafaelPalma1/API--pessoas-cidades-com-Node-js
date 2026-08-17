import { Router } from "express";
import {StatusCodes} from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
    return res.send('hello world');
});

router.post("/teste", (req, res) => {
    return res.status(StatusCodes.CREATED).json('hello world');
});

export { router };