import { render, screen } from '@testing-library/react'
import Forecast from '../Forecast'
import { Weather } from 'app/types'
import { weatherMock } from 'app/mocks'

const forecast: Weather[] = Array(5).fill(weatherMock)

describe('ForecastDay.tsx', () => {
  it('Should render five childs', () => {
    render(<Forecast forecast={forecast} />)

    expect(screen.getAllByTestId('forecast-day')).toHaveLength(5)
  })
})

