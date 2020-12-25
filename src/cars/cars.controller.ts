import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Car, CarClass } from './cars.model';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carsService.getAllCars();
  }

  @Get('/:id')
  getCarById(@Param('id') id: string): Car {
    return this.carsService.getCarById(id);
  }

  @Post()
  createCar(
    @Body('brand') brand: string,
    @Body('series') series: string,
    @Body('carClass') carClass: CarClass,
  ): Car {
    return this.carsService.createCar(brand, series, carClass);
  }
}
