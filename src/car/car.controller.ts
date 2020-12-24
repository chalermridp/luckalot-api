import { Controller, Get } from '@nestjs/common';
import { Car } from 'src/models/Car';

@Controller('cars')
export class CarController {
  @Get()
  getAll(): Car[] {
    return [new Car("Benz", "C-Class Coupe"), new Car("BMW", "5 Series Sedan"), new Car("Maserati", "Ghibli"), new Car("Honda", "Civic"), new Car("Toyota", "Vios")];
  }
}
