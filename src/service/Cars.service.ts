import CreateCarDTO from "../dtos/Car.dto";
import Car from "../model/Cars.model";
import axios from 'axios';
import LogRepository from "../repository/Log.repository";
import producer from "../queue/Producer";

class CarService {
    async listCars(): Promise<Car> {
       const cars = await axios.get<Car>('http://api-test.bhut.com.br:3000/api/cars');

       return cars.data;
    }

    async createCar(car: CreateCarDTO): Promise<Car> {
        const { data } = await axios.post<Car>(`http://api-test.bhut.com.br:3000/api/cars`, car);

        await LogRepository.create({
            car_id: data._id
        });

        producer.sendMessage(data);

        return data;
    }
}

export default CarService;