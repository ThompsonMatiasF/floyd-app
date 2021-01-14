import React, { FC } from 'react'
import { ForecastDay } from './'
import { Weather } from 'app/types'

interface ForecastProps {
  forecast: Weather[]
}

const Forecast: FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between align-items-center w-auto sm:w-1/2 md:w-auto pl-0 sm:pl-4 md:pl-0">
      {
        forecast?.map((weather: Weather) => <ForecastDay key={weather.date} weather={weather} />)
      }
    </div>
  )
}

export default Forecast
