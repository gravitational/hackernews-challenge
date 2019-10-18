import React, {useState} from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <div>
      <Title>Hacker News Challenge</Title>
    </div>
  );
}

const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  text-align: center;
  color: #f4511e;
  padding: 120px;
`