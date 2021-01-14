import { cleanup, render } from '@testing-library/react'
import { cityWeatherMock } from 'app/mocks'
import { City } from 'app/components'

describe('Weather.tsx', () => {
  beforeEach(() => {
    cleanup()
  })

  it.each([
    [true, cityWeatherMock, 1],
    [false, null, 0],
    [false, cityWeatherMock, 2],
  ])("When loading state is '%s', data is '%s' then should render '%s' child nodes", (loading, data, expected) => {
    const { container } = render(<City loading={loading} loadingText="Loading..." data={data} />)

    expect(container.childElementCount).toEqual(expected)
  })
})
