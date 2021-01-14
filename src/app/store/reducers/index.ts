import combineReducers from 'react-combine-reducers'
import weatherReducer, { initialState as weatherInitialState } from './weather/weather.reducer'

export default combineReducers({
  weather: [weatherReducer, weatherInitialState],
})
