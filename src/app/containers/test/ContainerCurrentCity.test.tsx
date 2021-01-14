import { render } from '@testing-library/react'
import ContainerCurrentCity from '../ContainerCurrentCity'
import * as actions from 'app/store/actions/weather/weather.actions'
import StoreProvider from 'app/store'

jest.mock('use-position', () => ({
  usePosition: () => ({
    latitude: -34.4924,
    longitude: -58.6162,
  }),
}))

const getCurrentCityWeatherSpy = jest.spyOn(actions, 'getCurrentCityWeather')

describe('ContainerCity.tsx', () => {
  it('should match snapshot', () => {
    render(<StoreProvider><ContainerCurrentCity /></StoreProvider>)

    expect(getCurrentCityWeatherSpy).toHaveBeenCalled()
  })
})
