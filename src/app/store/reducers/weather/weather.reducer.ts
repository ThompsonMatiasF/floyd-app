import { types } from 'app/store/actions/weather/weather.actions'
import { cities } from 'app/helpers/constants'
import { CityWeather } from 'app/types'

interface CityState {
  loading: boolean
  data: CityWeather | null,
  error: any,
}

interface WeatherState {
  city: CityState
  currentCity: CityState
  activeTab: number
}

export const initialState: WeatherState = {
  city: {
    loading: false,
    data: null,
    error: null,
  },
  currentCity: {
    loading: false,
    data: null,
    error: null,
  },
  activeTab: cities[0].id,
}

interface Action {
  type: string
  payload?: any
}

const weatherReducer = (state: any, { type, payload }: Action) => {
  switch (type) {
    case types.CITY.LOADING:
      return {
        ...state,
        city: {
          ...state.city,
          loading: true,
        },
      }
    case types.CITY.SUCCESS:
      return {
        ...state,
        city: {
          ...state.city,
          loading: false,
          data: payload,
          error: null,
        },
      }
    case types.CITY.FAILED:
      return {
        ...state,
        city: {
          ...state.city,
          loading: false,
          error: payload,
        },
      }
    case types.CURRENT_CITY.LOADING:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          loading: true,
        },
      }
    case types.CURRENT_CITY.SUCCESS:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          loading: false,
          data: payload,
          error: null,
        },
      }
    case types.CURRENT_CITY.FAILED:
      return {
        ...state,
        currentCity: {
          ...state.currentCity,
          loading: false,
          error: payload,
        },
      }
    case types.ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default weatherReducer
