import React, { useReducer } from 'react'
import rootReducer from './reducers'

export const AppContext = React.createContext()

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(...rootReducer);
  return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
}

export default StoreProvider
