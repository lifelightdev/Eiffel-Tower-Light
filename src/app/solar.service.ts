import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {parse} from 'date-fns';
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolarService {

  constructor(private readonly http: HttpClient) {
  }

  public findSunPositionAtEiffelTower() {
    return this.http.get<SunPosition>(`https://api.sunrise-sunset.org/json?lat=48.858370&lng=2.294481`).pipe(tap(data => {
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

export class SunPosition {
  results: Results | undefined;
  status: string | undefined;
  tzid: string | undefined;
}

export class Results {
  sunrise: Date | undefined;
  sunset: Date | undefined;
  solar_noon: Date | undefined;
  day_length: number | undefined;
  civil_twilight_begin: Date | undefined;
  civil_twilight_end: Date | undefined;
  nautical_twilight_begin: Date | undefined;
  nautical_twilight_end: Date | undefined;
  astronomical_twilight_begin: Date | undefined;
  astronomical_twilight_end: Date | undefined;
}
