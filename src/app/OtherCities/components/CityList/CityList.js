import React from 'react';
import styled from 'styled-components';
import Temperature from '../../../../components/Temperature';
import WeatherIcon from '../../../../components/WeatherIcon';

const Container = styled.button`
  font-size: 1rem;
  border: 0;
  outline: 0;
  padding: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CityName = styled.div`
  width: 150px;
  font-size: 1.25rem;
`;

const StyledTemperature = styled(Temperature)`
  font-size: 1.25rem;
  color: rgba(0,0,0,.5);
  margin-right: 1.25rem;
`

const CityList = ({
  weathers,
  handleCityWeatherClick,
}) => (
  <div>
    {weathers.map((weather) => (
      <Container 
        key={weather.cityName} 
        onClick={() => handleCityWeatherClick(weather)}
      >
        <CityName>{weather.cityName}</CityName>
        <StyledTemperature value={Number.parseFloat(weather.temperature).toFixed(0)} />
        <WeatherIcon code={weather.weatherIcon} />
      </Container>
    ))}
  </div>
);

export default CityList;
