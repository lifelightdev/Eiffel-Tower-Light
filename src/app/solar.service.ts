import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {parse} from 'date-fns';
import {tap} from "rxjs";
import {SunPosition} from './sun-position';

@Injectable({
  providedIn: 'root'
})
export class SolarService {
  constructor(private readonly http: HttpClient) {
  }

  public findSunPositionAtEiffelTower() {
    const url = `https://api.sunrise-sunset.org/json?lat=48.858370&lng=2.294481`;
    return this.http.get<SunPosition>(url).pipe(tap(data => {
      if (data.results?.sunset) {
        const sunsetDateParse: Date = parse(data.results.sunset.toString(), 'h:mm:ss a', new Date());
        let sunsetDate = new Date();
        sunsetDate.setHours(sunsetDateParse.getHours() + (-sunsetDateParse.getTimezoneOffset() / 60));
        sunsetDate.setMinutes(sunsetDateParse.getMinutes());
        sunsetDate.setSeconds(sunsetDateParse.getSeconds());
        data.results.sunset = sunsetDate;
      }
    }));
  }
}
