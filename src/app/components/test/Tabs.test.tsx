import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import Tabs from '../Tabs'
import {cities} from '../../helpers/constants';
import React from 'react';
import StoreProvider from 'app/store';

describe('Tabs.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()

    render(<StoreProvider><Tabs /></StoreProvider>)
  })

  it('Should render five tabs and first tab should be disabled', () => {
    const tabs = screen.getAllByTestId('tab')

    expect(tabs).toHaveLength(5)
    expect(tabs[0]).toBeDisabled()
  })

  it.each([
    cities.map((_, i) => i)
  ])("Tab '%s' should turn disable when pressed", (index) => {
    fireEvent.click(screen.getAllByTestId('tab')[index])

    expect(screen.getAllByTestId('tab')).toHaveLength(5)
    expect(screen.getAllByTestId('tab')[index]).toBeDisabled()
  })
})
