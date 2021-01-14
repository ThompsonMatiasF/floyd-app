import { render } from '@testing-library/react'
import Body from '../Body'
import { MockStoreProvider } from 'app/mocks'

describe('Body.tsx', () => {
  it('should match snapshot', () => {
    const container = render(<MockStoreProvider><Body /></MockStoreProvider>).container

    expect(container).toMatchSnapshot()
  })
})
