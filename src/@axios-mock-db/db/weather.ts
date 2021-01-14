import mock from '../mock'

const weather = {
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "muy nuboso",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 8.17,
    "feels_like": 1.85,
    "temp_min": 7.22,
    "temp_max": 9,
    "pressure": 1015,
    "humidity": 76
  },
  "visibility": 10000,
  "wind": {
    "speed": 7.2,
    "deg": 250
  },
  "clouds": {
    "all": 75
  },
  "dt": 1610384297,
  "sys": {
    "type": 1,
    "id": 1414,
    "country": "GB",
    "sunrise": 1610352135,
    "sunset": 1610381655
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}

mock
  .onGet(/\/mock\/weather.*/)
  .reply(() => [200, weather])
