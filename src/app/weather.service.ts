import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  foo: string = "Hello WeatherService"
  apiKey: string = "361c63784c396a68"
  constructor( public http: Http) { }

  getWeatherData() {
    return this.http.get(`http://api.wunderground.com/api/{{ this.apiKey }}/conditions/q/CA/San_Francisco.json`)
  }
}
