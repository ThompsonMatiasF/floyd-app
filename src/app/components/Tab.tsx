import React, {FC, ReactElement} from 'react'
import { glassCard } from 'app/helpers/constants'

interface TabProps {
  active: boolean
  changeTab: () => void
  content: ReactElement | string
}

const Tab: FC<TabProps> = ({ active, changeTab, content }) => {

  return (
    <button
      className={`
        w-1/5 ml-2 mr-2 first:ml-0 last:mr-0 p-2 rounded-md 
        ${active ? 'text-white font-bold' : 'text-gray-900 bg-white'}
      `}
      style={active ? glassCard : {}}
      disabled={active}
      onClick={changeTab}
      data-testid="tab"
    >
      { content }
    </button>
  )
}

export default Tab
