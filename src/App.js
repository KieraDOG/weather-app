import React from 'react';
import styled from 'styled-components';
import CurrentCity from './app/CurrentCity';
import OtherCities from './app/OtherCities';
import Forecast from './app/Forecast';

const Wrapper = styled.div`
  min-height: 100vh;
  background: url(https://wallpaperaccess.com/full/2629319.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.div`
  background: white;
  background-size: cover;
  border-radius: 32px;
`;

const Bottom = styled.div`
  display: flex;
  padding: 48px 64px;
  justify-content: space-between;
`;

const App = () => (
  <Wrapper>
    <Panel>
      <CurrentCity />
      <Bottom>
        <OtherCities />
        <Forecast />
      </Bottom>
    </Panel>
  </Wrapper>
)

export default App;
