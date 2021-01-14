import axios from 'axios'
import { defaultParams } from 'app/helpers/constants'

export const weatherClient = axios.create({
  baseURL: process.env.REACT_APP_ENABLE_MOCK
    ? '/mock'
    : 'https://api.openweathermap.org/data/2.5',
  params: defaultParams,
})
