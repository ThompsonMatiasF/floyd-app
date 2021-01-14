import { CityWeather, Weather, Location } from 'app/types'
import { cityMap } from 'app/helpers/constants'

const weatherBuilder = (data: any): Weather => ({
  date: data.dt,
  description: data.weather?.[0].description,
  icon: data.weather?.[0].icon,
  temp: {
    main: parseInt(data.main?.temp || data.temp.day, 10),
    min: parseInt(data.main?.temp_min || data.temp.min, 10),
    max: parseInt(data.main?.temp_max || data.temp.max, 10),
  },
})

const locationBuilder = (data: any): Location => ({
  id: data.id,
  country: {
    id: data.sys.country,
    name: cityMap[data.sys.country],
  },
  city: data.name,
  coord: {
    lat: data.coord.lat,
    lon: data.coord.lon,
  },
})

export const cityWeatherBuilder = (data: any): CityWeather => ({
  location: locationBuilder(data.weather),
  weather: weatherBuilder(data.weather),
  forecast: data.forecast.daily.slice(1, 6).map((weather: any) => weatherBuilder(weather)),
})

export default cityWeatherBuilder
