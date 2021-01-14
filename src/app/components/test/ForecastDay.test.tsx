import { render } from '@testing-library/react'
import ForecastDay from '../ForecastDay'
import { weatherMock } from 'app/mocks'

describe('ForecastDay.tsx', () => {
  it('should match snapshot', () => {
    const container = render(<ForecastDay weather={weatherMock} />).container

    expect(container).toMatchSnapshot()
  })
})
