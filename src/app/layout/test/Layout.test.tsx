import { render } from '@testing-library/react'
import Layout from '../Layout'
import { MockStoreProvider } from 'app/mocks'

describe('Layout.tsx', () => {
  it('should match snapshot', () => {
    const container = render(<MockStoreProvider><Layout /></MockStoreProvider>).container

    expect(container).toMatchSnapshot()
  })
})

