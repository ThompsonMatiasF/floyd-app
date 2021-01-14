import weatherReducer from './weather.reducer'
import { types } from 'app/store/actions/weather/weather.actions'

describe('weather.reducer.ts', () => {
  it.each([
    [
      { city: { loading: false } },
      { type: types.CITY.LOADING },
      { city: { loading: true } },
    ],
    [
      { city: { loading: true, data: null, error: 'error', } },
      { type: types.CITY.SUCCESS, payload: 'payload' },
      { city: { loading: false, data: 'payload', error: null, } },
    ],
    [
      { city: { loading: true, data: 'payload', error: null, } },
      { type: types.CITY.FAILED, payload: 'error' },
      { city: { loading: false, data: 'payload', error: 'error', } },
    ],
    [
      { currentCity: { loading: false } },
      { type: types.CURRENT_CITY.LOADING },
      { currentCity: { loading: true } },
    ],
    [
      { currentCity: { loading: true, data: null, error: 'error', } },
      { type: types.CURRENT_CITY.SUCCESS, payload: 'payload' },
      { currentCity: { loading: false, data: 'payload', error: null, } },
    ],
    [
      { currentCity: { loading: true, data: 'payload', error: null, } },
      { type: types.CURRENT_CITY.FAILED, payload: 'error' },
      { currentCity: { loading: false, data: 'payload', error: 'error', } },
    ],
    [
      { activeTab: 0 },
      { type: types.ACTIVE_TAB, payload: 1 },
      { activeTab: 1 },
    ],
  ])('Should return updated state', (prev, action, expected) => {
    expect(weatherReducer(prev, action)).toEqual(expected)
  })
})
