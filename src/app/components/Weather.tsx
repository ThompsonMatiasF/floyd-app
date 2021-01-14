import React, { FC } from 'react'
import moment from 'moment'
import { glassCard } from 'app/helpers/constants'
import { Location, Weather as WeatherType } from 'app/types'
import { WeatherIcon } from './'

interface WeatherProps {
  location: Location,
  weather: WeatherType,
}

const Weather: FC<WeatherProps> = ({ weather, location }) => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-stretch sm:items-center md:items-stretch rounded-b-2xl w-auto sm:w-1/2 md:w-auto"
      style={glassCard}
    >
      <div className="flex flex-col items-center sm:items-stretch font-lg p-4 text-2xl flex-1 text-center md:text-left">
        <span className="text-5xl font-bold">{location?.city}<span className="text-3xl font-light">, {location.country.name}</span></span>
        <span className="italic font-light flex-1 pt-2 font-bold capitalize">{moment().locale('es').format('dddd DD')}</span>
        <span className="font-bold uppercase">{weather?.description}</span>
      </div>
      <div className="flex flex-row justify-center items-center bg-blue-500 pl-4 py-2 rounded-b-2xl">
        <div className="flex flex-col justify-center font-bold text-center">
          <span className="text-6xl md:text-9xl">{weather?.temp.main}º</span>
          <span className="text-xl">{weather?.temp.min}º / {weather?.temp.max}º</span>
        </div>
        <WeatherIcon large icon={weather.icon} description={weather.description} />
      </div>
    </div>
  )
}

export default Weather
