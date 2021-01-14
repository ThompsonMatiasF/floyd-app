import React, { FC, useContext, useEffect } from 'react'
import { AppContext } from 'app/store'
import { getCityWeather } from 'app/store/actions/weather/weather.actions'
import { City } from 'app/components'

const ContainerCity: FC = ({ children }) => {
  const { state: { weather: { city: { loading, data }, activeTab: id } }, dispatch } = useContext(AppContext)

  useEffect(() => {
    getCityWeather(dispatch, { id })
  }, [dispatch, id])

  return (
    <div>
      {!loading && children}
      <City
        loading={loading}
        loadingText="Cargando datos de otras ciudades..."
        data={data}
      />
    </div>
  )
}

export default ContainerCity
