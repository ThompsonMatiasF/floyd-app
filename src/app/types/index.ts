export interface Temperature {
  main: number
  min: number
  max: number
}

export interface Weather {
  date: number
  description: string
  icon: string
  temp: Temperature
}

export interface Coordinates {
  lat: number
  lon: number
}

export interface Country {
  id: string
  name: string
}

export interface Location {
  id: number
  country: Country
  city: string
  coord: Coordinates
}

export interface CityWeather {
  location: Location
  weather: Weather
  forecast: Weather[]
}

export interface RequestState {
  LOADING: string
  SUCCESS: string
  FAILED: string
}

export interface WeatherActions {
  CITY: RequestState
  CURRENT_CITY: RequestState
  ACTIVE_TAB: string
}
