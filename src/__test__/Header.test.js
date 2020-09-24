import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'

import Header from '../components/Header'

describe('Header component', () => {
  it('renders without error', () => {
    expect(
      render(
        <Router>
          <Header />
        </Router>,
      ),
    ).toMatchSnapshot()
  })
})
