import { Request } from "express";
import CarService from "../service/Cars.service";
import { Response } from "express-serve-static-core";
import CreateCarDTO from "../dtos/Car.dto";

export default class CarsController {
    private readonly carService = new CarService();

    async getCars(req: Request, res: Response) {
        const response = await this.carService.listCars();

        return res.status(200).json(response);
    }

    async createCars(req: Request, res: Response) {
        const dto = await CreateCarDTO.validate(req.body);
        if (Array.isArray(dto)) {
            return res.status(400).json({ errors: dto });
        }

        try {
            const response = await this.carService.createCar(req.body);

            return res.status(201).json(response);
        } catch (e) {
            return res.status(500).json({ errors: ['Internal Server Error while communicating to external API'] });
        }
    }
}