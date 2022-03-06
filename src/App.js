import React, { useState } from 'react';
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

const WEATHER = {
  Melbourne: {
    cityName: 'Melbourne',
    temperature: '24.12',
    humidity: '81%',
    wind: '7 K/M',
    weather: 'Clouds',
    weatherIcon: '01d',
  }, 
  Sydney: {
    cityName: 'Sydney',
    humidity: '72%',
    wind: '14 K/M',
    weather: 'Rain',
    temperature: '18.15',
    weatherIcon: '50d',
  },
  Brisbane: {
    cityName: 'Brisbane',
    humidity: '95%',
    wind: '2.57 K/M',
    weather: 'Rain',
    temperature: '22.42',
    weatherIcon: '09d',
  },
  Perth: {
    cityName: 'Perth',
    humidity: '38%',
    wind: '8.75 K/M',
    weather: 'Clear',
    temperature: '29.87',
    weatherIcon: '01d',
  }
};

// Props Drill 痛点 -> Context / Redux

const App = () => {
  const [data, setData] = useState(WEATHER.Melbourne);

  return (
    <Wrapper>
      <Panel>
        <CurrentCity data={data} />
        <Bottom>
          <OtherCities 
            weathers={[WEATHER.Melbourne, WEATHER.Sydney, WEATHER.Brisbane, WEATHER.Perth]} 
            handleCityWeatherClick={setData}
          />
          <Forecast />
        </Bottom>
      </Panel>
    </Wrapper>
  );
}

export default App;
