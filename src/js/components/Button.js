import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Btn = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: white;
  line-height: 1;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 500;
  font-size: .75rem;
  letter-spacing: .05em;
  border: 0;
  border-radius: .5rem;
  padding: .875rem 1.125rem;
  background: #FF6600;
  transition: .2s box-shadow;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 0 20px #FF8533 inset;
  }

  span {
    opacity: .5;
    margin-left: .5em;
  }
` 

export default function Button ({ onClick, children }) {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}