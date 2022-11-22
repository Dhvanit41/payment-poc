import express, { Request, Response } from "express";
import { trmDetail } from "../controllers/trm";

const router = express.Router()

router.get('/trm-details',trmDetail)

export {
    router
}