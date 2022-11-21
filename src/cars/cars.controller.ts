import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
        
    constructor(
        private readonly carService: CarsService
    ) {
    }

    @Get()
    getAllAcars() {
        return this.carService.findAll();
    }
    
    @Get(':id')
    getCarBiId(@Param('id', ParseUUIDPipe) id: string ) {

        return this.carService.findOneById(id);
    }

    @Post()
    create( @Body() createCarDto: createCarDto ) {

        const carService = this.carService.create(createCarDto);

        return carService
        
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDto: updateCarDto)
    {
        return this.carService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
        return this.carService.delete(id)
    }
}
