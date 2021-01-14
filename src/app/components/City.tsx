import React, { FC } from 'react'
import { Forecast, Weather } from './'

interface CityProps {
  loading: boolean
  loadingText: string
  data: any
}

const City: FC<CityProps> = ({ loading, loadingText, data }) => loading
  ? <p className="text-center">{ loadingText }</p>
  : data
    ? (<>
        <Weather weather={data.weather} location={data.location} />
        <Forecast forecast={data.forecast} />
    </>)
    : null

export default City
