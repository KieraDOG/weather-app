import React, { useState } from 'react';
import styled from 'styled-components';
import Temperature from '../../components/Temperature';
import Attributes from './Attributes';
import CityName from './CityName';
import Outlook from './Outlook';

const Wrapper = styled.div`
  background-image: url(https://i.imgur.com/GhQZhaO.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  width: 780px;
  justify-content: space-between;
  padding: 64px 96px;
  color: white;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`;

const Weather = styled.div`
  text-align: center;
`;

const StyledTemperature = styled(Temperature)`
  font-size: 5rem;
`;

const CurrentCity = ({
  data,
}) => {
  return (
    <Wrapper>
      <Weather>
        <StyledTemperature value={data.temperature} />
        <Outlook weather={data.weather} />
        <Attributes attributes={{ humidity: data.humidity, wind: data.wind }} />
      </Weather>
      <CityName cityName={data.cityName} />
    </Wrapper>
  );
}

export default CurrentCity;
