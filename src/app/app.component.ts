import { Component } from '@angular/core';

const MOCKDATA: Object[] = [
  {
  "display_location":{
      "full": "San Francisco, CA"
      },
      "temp_f": 66.3,
      "weather": "Partly Cloudy",
      "relative_humidity": "65%"
  },
  {
  "display_location":{
     "full": "San Diego, CA"
      },
  "temp_f": 80,
  "weather": "Sunny",
  "relative_humidity": "30%"
  },
  {
  "display_location":{
     "full": "Seattle, WA"
      },
  "temp_f": 50,
  "weather": "Rain",
  "relative_humidity": "100%"
  }, {
  "display_location":{
     "full": "Las Vegas, NV"
      },
  "temp_f": 105,
  "weather": "Hot",
  "relative_humidity": "5%"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Weather App';
  weatherData = MOCKDATA;

}
