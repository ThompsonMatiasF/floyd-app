import { render } from '@testing-library/react'
import ContainerCity from '../ContainerCity'
import * as actions from 'app/store/actions/weather/weather.actions'
import StoreProvider from 'app/store'

const getCityWeatherSpy = jest.spyOn(actions, 'getCityWeather')

describe('ContainerCity.tsx', () => {
  it('should match snapshot', () => {
    render(<StoreProvider><ContainerCity /></StoreProvider>)

    expect(getCityWeatherSpy).toHaveBeenCalled()
  })
})
