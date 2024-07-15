import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolarService {

  constructor(private readonly http: HttpClient) {
  }

  public recherchePositionSoleil() {
    return this.http.get<SunPosition>(`https://api.sunrise-sunset.org/json?lat=48.858370&lng=2.294481`);
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
