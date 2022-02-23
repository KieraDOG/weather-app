import React from 'react';
import styled from 'styled-components';
import Temperature from '../../../components/Temperature';
import WeatherIcon from '../../../components/WeatherIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CityName = styled.div`
  width: 190px;
`;

const DATA = [{
  id: 'melbourne',
  name: 'Melbourne',
  temperature: '24',
  weatherIcon: '04d',
}, {
  id: 'sydney',
  name: 'Sydney',
  temperature: '25',
  weatherIcon: '04d',
}, {
  id: 'perth',
  name: 'Perth',
  temperature: '33',
  weatherIcon: '01d',
}, ];

const CityList = () => (
  <div>
    {DATA.map(({ id, name, temperature, weatherIcon }) => (
      <Container key={id}>
        <CityName>{name}</CityName>
        <Temperature value={temperature} />
        <WeatherIcon />
      </Container>
    ))}
  </div>
);

export default CityList;
