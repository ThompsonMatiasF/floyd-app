import { render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer.tsx', () => {
  it('should match snapshot', () => {
    const container = render(<Footer />).container

    expect(container).toMatchSnapshot()
  })
})
