import { Request } from "express";
import { Response } from "express-serve-static-core";
import LogRepository from "../repository/Log.repository";

export default class LogController {
    async getLogs(req: Request, res: Response) {
        const logs = await LogRepository.find();

        return res.status(200).json(logs);
    }
}