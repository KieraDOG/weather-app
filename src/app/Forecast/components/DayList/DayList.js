import React from 'react';
import styled from 'styled-components';
import Temperature from '../../../../components/Temperature';
import WeatherIcon from '../../../../components/WeatherIcon';

const Wrapper = styled.div`
  display: flex;
`; 

const Day = styled.div`
`;

const Container = styled.div`
  text-align: center;

  & ~ & {
    margin-left: 2rem;
  }
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  margin: 1rem 0;
  width: 70px;
`;

const StyledTemperature = styled(Temperature)`
  font-size: 1.25rem;
  color: rgba(0,0,0,.5);
`;

const DATA = [{
  day: 'MON',
  temperature: '9',
  weatherIcon: '11d',
}, {
  day: 'TUE',
  temperature: '15',
  weatherIcon: '01d',
}, {
  day: 'WED',
  temperature: '11',
  weatherIcon: '03d',
}, {
  day: 'THU',
  temperature: '7',
  weatherIcon: '50d',
}, {
  day: 'FRI',
  temperature: '8',
  weatherIcon: '09d',
}];

const DayList = () => (
  <Wrapper>
    {DATA.map(({ day, temperature, weatherIcon }) => (
      <Container>
        <Day>{day}</Day>
        <StyledWeatherIcon code={weatherIcon} />
        <StyledTemperature value={temperature} />
      </Container>
    ))}
  </Wrapper>
);

export default DayList;
