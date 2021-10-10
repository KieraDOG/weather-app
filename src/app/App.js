import React, { useState } from 'react';
import styled from 'styled-components';
import Current from './Current';
import background from './assets/background.png';
import OtherCities from './OtherCities';
import Forecast from './Forecast';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Panel = styled.div`
  background-color: white;
  overflow: hidden;
  width: 800px;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
`;

const Bottom = styled.div`
  display: flex;
  padding: 40px 80px;
`;

const Divider = styled.div`
  margin: 0 32px;
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  opacity: 0.6;
`;

const MELBOURNE_CITY_ID = 2158177;

function App() {
  const [cityId, setCityId] = useState(MELBOURNE_CITY_ID);

  return (
    <Container>
      <Panel>
        <Current cityId={cityId} />
        <Bottom>
          <OtherCities cityId={cityId} onCityClick={(id) => setCityId(id)} />
          <Divider />
          <Forecast />
        </Bottom>
      </Panel>
    </Container>
  );
}

export default App;
