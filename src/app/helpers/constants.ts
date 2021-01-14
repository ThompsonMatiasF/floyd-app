export const glassCard = {
  background: 'rgba( 255, 255, 255, 0.60 )',
  backdropFilter: 'blur( 4px )',
}

export const cityMap: {[key: string]: string} = {
  AR: 'Argentina',
  ES: 'España',
  US: 'Estados Unidos',
  FR: 'Francia',
  IT: 'Italia',
  JP: 'Japon',
}

export const cities = [
  {
    id: 6359304,
    name: 'Madrid',
    country: 'ES',
  },
  {
    id: 5128581,
    name: 'New York',
    country: 'US',
  },
  {
    id: 2968815,
    name: 'Paris',
    country: 'FR',
  },
  {
    id: 3169070,
    name: 'Roma',
    country: 'IT',
  },
  {
    id: 1850147,
    name: 'Tokyo',
    country: 'JP',
  },
]

export const defaultParams = {
  exclude: 'current,hourly,minutely,alerts',
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
  lang: 'es',
}

export default {
  glassCard,
  cities,
  defaultParams,
}
