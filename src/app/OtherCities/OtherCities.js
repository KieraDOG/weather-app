import React from 'react';
import SubContent from '../../components/SubContent';
import CityList from './components/CityList';

const OtherCities = ({
  weathers,
  handleCityWeatherClick,
}) => (
  <SubContent title="Other Cities">
    <CityList weathers={weathers} handleCityWeatherClick={handleCityWeatherClick} />
  </SubContent>
);

export default OtherCities;
