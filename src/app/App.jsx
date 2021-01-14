import React from 'react'
import '@axios-mock-db'
import StoreProvider from 'app/store'
import { Layout } from 'app/layout'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')

const App = () => (
  <StoreProvider>
    <Layout />
  </StoreProvider>
);

export default App
