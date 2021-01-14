import mock from '../mock'

const forecast = {
  "lat": -34.4848,
  "lon": -58.612,
  "timezone": "America/Argentina/Buenos_Aires",
  "timezone_offset": -10800,
  "daily": [
    {
      "dt": 1610380800,
      "sunrise": 1610355248,
      "sunset": 1610406623,
      "temp": {
        "day": 29.7,
        "min": 19,
        "max": 29.7,
        "night": 21.73,
        "eve": 26.68,
        "morn": 23.44
      },
      "feels_like": {
        "day": 30.3,
        "night": 16.32,
        "eve": 25.95,
        "morn": 22.98
      },
      "pressure": 1006,
      "humidity": 55,
      "dew_point": 19.98,
      "wind_speed": 4.2,
      "wind_deg": 2,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "lluvia moderada",
          "icon": "10d"
        }
      ],
      "clouds": 93,
      "pop": 1,
      "rain": 14.27,
      "uvi": 9.1
    },
    {
      "dt": 1610467200,
      "sunrise": 1610441703,
      "sunset": 1610493013,
      "temp": {
        "day": 24.81,
        "min": 18.08,
        "max": 25.23,
        "night": 21.14,
        "eve": 22.47,
        "morn": 18.29
      },
      "feels_like": {
        "day": 19.89,
        "night": 16.95,
        "eve": 18.05,
        "morn": 13.33
      },
      "pressure": 1018,
      "humidity": 18,
      "dew_point": -2.52,
      "wind_speed": 3.97,
      "wind_deg": 99,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0.1,
      "uvi": 13.76
    },
    {
      "dt": 1610553600,
      "sunrise": 1610528160,
      "sunset": 1610579402,
      "temp": {
        "day": 26.49,
        "min": 18.22,
        "max": 28.06,
        "night": 24.43,
        "eve": 26.05,
        "morn": 18.32
      },
      "feels_like": {
        "day": 21.92,
        "night": 19.56,
        "eve": 21.09,
        "morn": 14.38
      },
      "pressure": 1020,
      "humidity": 18,
      "dew_point": 0.65,
      "wind_speed": 3.74,
      "wind_deg": 79,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0,
      "uvi": 13.65
    },
    {
      "dt": 1610640000,
      "sunrise": 1610614617,
      "sunset": 1610665788,
      "temp": {
        "day": 26.78,
        "min": 19.34,
        "max": 29.74,
        "night": 25.65,
        "eve": 27.49,
        "morn": 19.34
      },
      "feels_like": {
        "day": 22.7,
        "night": 24.06,
        "eve": 23.01,
        "morn": 15.11
      },
      "pressure": 1017,
      "humidity": 26,
      "dew_point": 5.84,
      "wind_speed": 4.42,
      "wind_deg": 51,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0,
      "uvi": 13.8
    },
    {
      "dt": 1610726400,
      "sunrise": 1610701075,
      "sunset": 1610752173,
      "temp": {
        "day": 27.29,
        "min": 21.11,
        "max": 31.04,
        "night": 26.53,
        "eve": 30.9,
        "morn": 21.11
      },
      "feels_like": {
        "day": 26.47,
        "night": 25.43,
        "eve": 31.05,
        "morn": 19.26
      },
      "pressure": 1007,
      "humidity": 47,
      "dew_point": 15.14,
      "wind_speed": 3.47,
      "wind_deg": 26,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "lluvia ligera",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.43,
      "rain": 1.35,
      "uvi": 3.49
    },
    {
      "dt": 1610812800,
      "sunrise": 1610787534,
      "sunset": 1610838556,
      "temp": {
        "day": 29.21,
        "min": 23.42,
        "max": 31.37,
        "night": 25.69,
        "eve": 31.37,
        "morn": 23.42
      },
      "feels_like": {
        "day": 30.3,
        "night": 23.63,
        "eve": 28.52,
        "morn": 25.57
      },
      "pressure": 1005,
      "humidity": 52,
      "dew_point": 18.65,
      "wind_speed": 2.64,
      "wind_deg": 196,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "lluvia ligera",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.94,
      "rain": 5.09,
      "uvi": 4
    },
    {
      "dt": 1610899200,
      "sunrise": 1610873993,
      "sunset": 1610924937,
      "temp": {
        "day": 24.65,
        "min": 19.06,
        "max": 29.17,
        "night": 26.36,
        "eve": 29.17,
        "morn": 19.06
      },
      "feels_like": {
        "day": 20.76,
        "night": 22.57,
        "eve": 25.31,
        "morn": 15.42
      },
      "pressure": 1011,
      "humidity": 34,
      "dew_point": 8.16,
      "wind_speed": 4.8,
      "wind_deg": 209,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0,
      "uvi": 4
    },
    {
      "dt": 1610985600,
      "sunrise": 1610960452,
      "sunset": 1611011317,
      "temp": {
        "day": 28.05,
        "min": 20.3,
        "max": 29.07,
        "night": 24.95,
        "eve": 28.42,
        "morn": 20.3
      },
      "feels_like": {
        "day": 26.85,
        "night": 21,
        "eve": 24.7,
        "morn": 20.05
      },
      "pressure": 1014,
      "humidity": 29,
      "dew_point": 8.81,
      "wind_speed": 1.16,
      "wind_deg": 81,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "pop": 0,
      "uvi": 4
    }
  ]
}

mock
  .onGet(/\/mock\/onecall.*/)
  .reply(() => [200, forecast])
