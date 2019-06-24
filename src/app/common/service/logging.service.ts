import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(message?: any, ...optionalParameters: any[]) {
    if (!environment.production) {
      console.log(message, ...optionalParameters);
    }
    return;
  }
}
