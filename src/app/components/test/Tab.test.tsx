import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import Tab from '../Tab'
import { cities } from 'app/helpers/constants'

const changeTabMock = jest.fn()

describe('Tab.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it.each([
    true, false
  ])("Should call changeTab when activeTab state is true - activeTab current state = '%s'", (active) => {
    render(<Tab active={active} changeTab={changeTabMock} content="test" />)
    fireEvent.click(screen.getByTestId('tab'))

    const expectation = expect(changeTabMock)
    active ? expectation.not.toHaveBeenCalled() : expectation.toHaveBeenCalled()
  })

  it.each(cities.map(city => city.name))("Should render tab with content = '%s'", (content) => {
    render(<Tab active changeTab={changeTabMock} content={content} />)

    expect(screen.getByTestId('tab')).toBeInTheDocument()
  })
})
