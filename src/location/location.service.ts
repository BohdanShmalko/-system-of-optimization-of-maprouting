import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  fixUserLocation(): string {
    return 'Hello World!';
  }
}
