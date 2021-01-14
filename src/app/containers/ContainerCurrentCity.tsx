import React, { useContext, useEffect } from 'react'
import { AppContext } from 'app/store'
import { getCurrentCityWeather } from 'app/store/actions/weather/weather.actions'
import { City } from 'app/components'
import { usePosition } from 'use-position'

const ContainerCurrentCity = () => {
  const { state: { weather: { currentCity: { loading, data } } }, dispatch } = useContext(AppContext)
  const { latitude: lat, longitude: lon } = usePosition(false);

  useEffect(() => {
    lat && lon && getCurrentCityWeather(dispatch, { lat, lon })
  }, [dispatch, lat, lon])

  return (
    <div>
      <City
        loading={loading}
        loadingText="Cargando datos de tu ciudad..."
        data={data}
      />
    </div>
  )
}

export default ContainerCurrentCity
