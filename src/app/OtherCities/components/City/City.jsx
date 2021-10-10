import React from 'react';
import styled from 'styled-components';
import Temperature from '../../../../components/Temperature';
import WeatherImage from '../../../../components/WeatherImage';

const Button = styled.button`
  background: transparent;
  border: 0;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  margin-top: 12px;
  align-items: center;
`

const Name = styled.div`
  width: 100px;
`;

const CityTemperature = styled.div`
  width: 60px;
`;

const City = ({
  name,
  temperature,
  weather,
  onClick,
}) => (
  <Button onClick={onClick}>
    <Name>{name}</Name>
    <CityTemperature>
      <Temperature>{temperature}</Temperature>
    </CityTemperature>
    <WeatherImage width="50px" weather={weather} />
  </Button>
);

export default City;
