import React, { FC } from 'react'

interface WeatherIconProps {
  large?: boolean
  icon: string
  description?: string
}

const WeatherIcon: FC<WeatherIconProps> = ({ large = false, icon, description }) => (
  <img src={`http://openweathermap.org/img/wn/${icon}${large ? '@4x' : ''}.png`} alt={description || icon} />
)

export default WeatherIcon
