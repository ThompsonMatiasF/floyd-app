import { render } from '@testing-library/react'
import Header from '../Header'

describe('Header.tsx', () => {
  it('should match snapshot', () => {
    const container = render(<Header />).container

    expect(container).toMatchSnapshot()
  })
})

