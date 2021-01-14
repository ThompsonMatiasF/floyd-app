import React, { FC } from 'react'
import moment from 'moment'
import { glassCard } from 'app/helpers/constants'
import { Weather } from 'app/types'
import { WeatherIcon } from './'

interface ForecastDayProps {
  weather: Weather
}

const ForecastDay: FC<ForecastDayProps> = ({ weather }) => {
  return (
    <div
      className="w-full md:w-auto flex flex-row items-center my-4"
      style={{
        borderRadius: '50px',
        ...glassCard,
      }}
      data-testid="forecast-day"
    >
      <div
        className="bg-blue-500"
        style={{
          borderRadius: '50px',
        }}
      >
        <WeatherIcon icon={weather.icon} description={weather.description} />
      </div>
      <div className="text-center flex-1 pl-4 pr-6 text-xl md:text-base">
        <div className="inline-block md:block capitalize">{moment.unix(weather.date).format('dddd DD')}</div>
        <span className="inline md:hidden"> - </span>
        <div className="inline-block md:block"><span className="font-bold">{weather.temp.min}º</span> / <span className="font-bold">{weather.temp.max}º</span></div>
      </div>
    </div>
  )
}

export default ForecastDay
