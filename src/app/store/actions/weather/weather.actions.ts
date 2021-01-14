import { Dispatch } from 'react'
import { cityWeatherBuilder, weatherClient } from 'app/helpers'
import { RequestState, WeatherActions } from 'app/types'

export const types: WeatherActions = {
  CITY: {
    LOADING: '[ WEATHER ] - get city weather loading',
    SUCCESS: '[ WEATHER ] - set city weather success',
    FAILED: '[ WEATHER ] - set city weather failed',
  },
  CURRENT_CITY: {
    LOADING: '[ WEATHER ] - get current city weather loading',
    SUCCESS: '[ WEATHER ] - set current city weather success',
    FAILED: '[ WEATHER ] - set current city weather failed',
  },
  ACTIVE_TAB: '[ WEATHER ] - set active tab',
}

const setContext = (type: string, payload?: any) => ({
  type,
  payload,
})

const getWeather = async (dispatch: Dispatch<any>, type: RequestState, config = {}) => {
  try {
    dispatch(setContext(type.LOADING))

    const { data: weather } = await weatherClient.get('/weather', {params: {...config}})
    const { data: forecast } = await weatherClient.get('/onecall', {params: {...weather.coord}})
    const cityWeather = cityWeatherBuilder({weather, forecast})

    dispatch(setContext(type.SUCCESS, cityWeather))
  } catch (error) {
    dispatch(setContext(type.FAILED, error))
  }
}

export const getCityWeather = (dispatch: Dispatch<any>, config?: {[key: string]: any}) => getWeather(dispatch, types.CITY, config)

export const getCurrentCityWeather = (dispatch: Dispatch<any>, config?: {[key: string]: any}) => getWeather(dispatch, types.CURRENT_CITY, config)

export const setActiveTab = (dispatch: Dispatch<any>, id: number) => dispatch(setContext(types.ACTIVE_TAB, id))

export default {
  getCityWeather,
  getCurrentCityWeather,
  setActiveTab,
}
