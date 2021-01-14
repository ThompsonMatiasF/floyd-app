import React, {FC} from 'react'
import { CityWeather, Location, Weather } from 'app/types'
import { initialState } from './store/reducers/weather/weather.reducer'
import { AppContext } from 'app/store';

export const weatherMock: Weather = {
  date: 1610553600,
  description: 'cielo claro',
  icon: '01d',
  temp:  {
    main: 26,
    min: 25,
    max: 27,
  },
}

export const locationMock: Location = {
  id: 3435010,
  country: {
    id: 'AR',
    name: 'Argentina',
  },
  city: 'Don Torcuato',
  coord: {
    lat: -34.4924,
    lon: -58.6162,
  },
}

export const cityWeatherMock: CityWeather = {
  location: locationMock,
  weather: weatherMock,
  forecast: Array(5).fill(weatherMock),
}

const state = {
  weather: {
    ...initialState,
    city: {
      ...initialState.city,
      data: cityWeatherMock,
    },
    currentCity: {
      ...initialState.currentCity,
      data: cityWeatherMock,
    },
  },
}

export const MockStoreProvider: FC = ({ children }) => (
  <AppContext.Provider value={{state, dispatch: jest.fn()}}>{ children }</AppContext.Provider>
)
