import { render } from '@testing-library/react'
import { weatherMock, locationMock } from 'app/mocks'
import { Weather } from '../';

describe('Weather.tsx', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Weather location={locationMock} weather={weatherMock} />)

    expect(container).toMatchSnapshot()
  })
})
