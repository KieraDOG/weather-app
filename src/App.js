import React from 'react';
import styled from 'styled-components';
import Current from './app/Current';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Current />
    </Container>
  );
}

export default App;
