import React from 'react';
import styled from 'styled-components';


class App extends React.Component {
  render() {
    return (
      <div>
        <Title>Hacker News Challenge</Title>
      </div>
    );
  }
}

export default App;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  padding: 100px;
`