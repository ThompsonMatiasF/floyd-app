import React from 'react'
import moment from 'moment'

const Header = () => (
  <div className="flex flex-row justify-between items-end py-4 px-8 md:px-0">
    <span
      className="font-bold text-3xl md:text-5xl"
      style={{fontFamily: 'Berkshire Swash'}}
    >
      <span className="text-red-500">floyd</span> app</span>
    <span className="uppercase font-bold text:xl md:text-2xl">{moment().format('MMMM YYYY')}</span>
  </div>
)

export default Header
