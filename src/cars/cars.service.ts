import { Injectable } from '@nestjs/common';
import { Car, CarClass } from './cars.model';
import { v1 as uuidv1 } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  getAllCars(): Car[] {
    return this.cars;
  }

  getCarById(id: string): Car {
    return this.cars.find((car) => car.id === id);
  }

  createCar(brand: string, series: string, carClass: CarClass): Car {
    const car: Car = {
      id: uuidv1(),
      brand,
      series,
      carClass,
    };
    this.cars.push(car);
    return car;
  }
}
