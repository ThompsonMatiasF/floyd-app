import React from 'react'
import { Tabs } from 'app/components'
import { ContainerCurrentCity, ContainerCity } from 'app/containers'

const Body = () => (
  <div className="flex flex-1 flex-wrap flex-col sm:flex-row md:flex-col justify-around bg-primary my-4 px-8 md:px-0">
    <ContainerCurrentCity />
    <span className="border-gray-200 mt-4 border-t-2 pt-8 mb-2 w-full" />
    <ContainerCity >
      <Tabs />
    </ContainerCity>
  </div>
)

export default Body
