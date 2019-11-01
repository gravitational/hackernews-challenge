import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainHeader = styled.header`
  display: flex;
  border-bottom: 1px solid gainsboro;
  margin-top: .5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;

  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }

  a,
  a:visited {
    color: inherit;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .75rem;
  }
`

const Header = () => (
  <MainHeader>
    <Link to='/'>
      <svg viewBox="0 0 38 38" aria-hidden>
        <path fill="#FF6600" d="M0 0h38v38h-38z" />
        <path d="M23.063 9h4.75l-6.625 12.5v7.5h-4.126v-7.5l-6.875-12.5h4.875l4.125 8.75 3.876-8.75z" fill="#FFF" />
      </svg>
      Hacker News
    </Link>
  </MainHeader>
)

export default Header