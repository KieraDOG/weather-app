import React from 'react';
import styled from 'styled-components';
import Temperature from '../../components/Temperature';
import background from './assets/background.jpeg';
import Metas from './components/Metas';
import SubText from './components/SubText';

const Container = styled.div`
  padding: 60px 80px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  position: relative;
`;

const CurrentTemperature = styled.div`
  font-size: 5rem;
`;

const Weather = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const CityName = styled.div`
  flex: 1;
  font-size: 2rem;
  text-align: right;
  margin-top: 16px;
`;

const Strip = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
  height: 24px;
`;

const Current = () => (
  <Container>
    <div>
      <CurrentTemperature>
        <Temperature>15.71</Temperature>
      </CurrentTemperature>
      <Weather>
        <SubText>Clouds</SubText>
      </Weather>
      <Metas />
    </div>
    <CityName>
      Melbourne
    </CityName>
    <Strip />
  </Container>
);

export default Current;
