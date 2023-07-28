import { Request, Response, Router } from "express";
import CarsController from "../controller/Cars.controller";

const router = Router();

const carsController = new CarsController();

router.get('/', (req: Request, res: Response) => carsController.getCars(req, res));
router.post('/', (req: Request, res: Response) => carsController.createCars(req, res));

export default router;