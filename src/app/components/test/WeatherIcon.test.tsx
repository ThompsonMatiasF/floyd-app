import { cleanup, render, screen } from '@testing-library/react'
import WeatherIcon from '../WeatherIcon'

describe('WeatherIcon.tsx', () => {
  beforeEach(() => {
    cleanup()
  })

  it.each([
    [true, 'large'], [false, 'small']
  ])("When large prop is '%s' Should render image as '%s'", (large) => {
    render(<WeatherIcon large={large} icon={'test'} />)

    expect(screen.getByAltText('test')).toHaveAttribute('src', `http://openweathermap.org/img/wn/test${large ? '@4x' : ''}.png`)
  })
})
