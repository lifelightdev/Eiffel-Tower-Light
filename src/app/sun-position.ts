export class SunPosition {
  results: Results | undefined;
  status: string | undefined;
  tzid: string | undefined;

  constructor(sunset?: Date) {
    this.results = new Results();
    this.results.sunset = sunset;
  }
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
