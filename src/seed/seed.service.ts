import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private carsService: CarsService,
    private bransService: BrandsService

  ) {}

  populateDB() {

    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.bransService.fillBrandsWithSeedData(BRAND_SEED);

    return {
      msg: 'success seed',
    }
  }
}
