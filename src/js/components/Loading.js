import React from 'react'
import styled from 'styled-components'

const LoadingElement = styled.span`
  --dot-size: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: calc(var(--dot-size) * -3) 0 0 calc(var(--dot-size) * -3); 
  display: inline-block;
  width: calc(var(--dot-size) * 6);
  height: calc(var(--dot-size) * 6);

  &:before,
  &:after {
    content: '';
  }

  &:before,
  &:after,
  span {
    position: absolute;
    top: calc(50% - var(--dot-size) / 2);
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
    background: dodgerblue;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  &:before {
    left: calc(var(--dot-size) / 2);
    animation: dot-one 0.6s infinite;
  }

  &:after {
    left: calc(var(--dot-size) / 2);
    animation: dot-two 0.6s infinite;
  }

  span:first-child {
    left: calc(var(--dot-size) * 2.5);
    animation: dot-two 0.6s infinite;
  }

  span:last-child {
    left: calc(var(--dot-size) * 4.5);
    animation: dot-three 0.6s infinite;
  }

  @keyframes dot-one {
    0%   { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes dot-two {
    0%   { transform: translate(0, 0);                         }
    100% { transform: translate(calc(var(--dot-size) * 2), 0); }
  }

  @keyframes dot-three {
    0%   { transform: scale(1); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
  }
`

const Loading = () => (
  <LoadingElement>
    <span />
    <span />
  </LoadingElement>
)

export default Loading