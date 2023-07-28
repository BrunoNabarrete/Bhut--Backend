import { Request, Response, Router } from "express";
import LogsController from "../controller/Logs.controller";

const router = Router();

const logsController = new LogsController();

router.get('/', (req: Request, res: Response) => logsController.getLogs(req, res));

export default router;