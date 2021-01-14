import { setActiveTab, getCurrentCityWeather, getCityWeather, types } from './weather.actions'
import { weatherClient } from 'app/helpers'

const dispatchMock = jest.fn()

jest.mock('app/helpers/weatherClient')

jest.mock('app/helpers/weatherBuilder', () => ({
  __esModule: true,
  default: () => 'builded',
}))

describe('weather.actions.ts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should dispatch action to update activeTab', () => {
    setActiveTab(dispatchMock, 1)

    expect(dispatchMock).toHaveBeenCalledWith({type: types.ACTIVE_TAB, payload: 1})
  })

  it.each([
    ['current city', types.CURRENT_CITY, getCurrentCityWeather],
    ['city', types.CITY, getCityWeather],
  ])('should get successfully %s data', async (_, type, getData) => {
    weatherClient.get.mockImplementationOnce(() => Promise.resolve({data: {coord: { lat: 1, lon: 2 }}})).mockImplementationOnce(() => Promise.resolve({data: {}}))
    await getData(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith({type: type.LOADING})
    expect(dispatchMock).toHaveBeenCalledWith({type: type.SUCCESS, payload: 'builded'})
  })

  it.each([
    ['current city', types.CURRENT_CITY, getCurrentCityWeather],
    ['city', types.CITY, getCityWeather],
  ])('should not get successfully %s data', async (_, type, getData) => {
    weatherClient.get.mockImplementationOnce(() => Promise.reject('error'))
    await getData(dispatchMock)

    expect(dispatchMock).toHaveBeenCalledWith({type: type.LOADING})
    expect(dispatchMock).toHaveBeenCalledWith({type: type.FAILED, payload: 'error'})
  })
})
