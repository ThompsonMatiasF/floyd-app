import React, { useContext } from 'react'
import { Tab } from './';
import { cities } from 'app/helpers/constants'
import { AppContext } from 'app/store'
import { setActiveTab } from 'app/store/actions/weather/weather.actions'

const Tabs= () => {
  const { state: { weather: { activeTab } }, dispatch } = useContext(AppContext)

  return (
    <div className="flex flex-row text-center justify-content-center w-full pb-2">
      {
        cities.map((city) => {
          const active = activeTab === city.id

          return (
            <Tab
              key={city.id}
              active={active}
              changeTab={() => setActiveTab(dispatch, city.id)}
              content={
                <>
                  <span className="hidden sm:block rounded-b-">{city.name}</span>
                  <span className="sm:hidden block">{city.country}</span>
                </>
              }
            />
          )
        })
      }
    </div>
  )
}

export default Tabs
