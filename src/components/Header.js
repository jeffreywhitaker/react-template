import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Header(props) {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background: cyan;

  > a {
    padding: 10px 5px;
    text-decoration: none;

    :hover {
      background: lightpink;
    }
  }
`
