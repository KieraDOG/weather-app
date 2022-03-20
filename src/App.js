import React, { useEffect, useState } from 'react';
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

const getWeathers = () => {
  const cityIds = ['2158177', '2147714', '2174003', '2063523'];
  const appId = '2466213f21b4b723d341e00a430a7673';
  const units = 'metric';

  const parameters = { id: cityIds.join(), appId, units };
  const url = new URL('https://api.openweathermap.org/data/2.5/group');
  url.search = new URLSearchParams(parameters).toString();

  return fetch(url);
}

const App = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [weathers, setWeathers] = useState();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeathers();
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }

    const weathers = data.list.map((data) => ({
      cityName: data.name,
      temperature: data.main.temp,
      humidity: `${data.main.humidity}%`,
      wind: `${data.wind.speed} K/M`,
      weather: data.weather[0].main,
      weatherIcon: data.weather[0].icon,
    }));

    setWeathers(weathers);
    setCurrentWeather(weathers[0]);
    setLoading(false);
  }, [data]);

  if (loading) {
    return 'Loading';
  }

  return (
    <Wrapper>
      <Panel>
        <CurrentCity data={currentWeather} />
        <Bottom>
          <OtherCities 
            weathers={weathers} 
            handleCityWeatherClick={setCurrentWeather}
          />
          <Forecast />
        </Bottom>
      </Panel>
    </Wrapper>
  );
}

export default App;
