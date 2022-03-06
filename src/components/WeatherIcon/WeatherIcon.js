import React from 'react';

const WeatherIcon = ({ code, className }) => (
  <img 
    className={className}
    src={`http://openweathermap.org/img/wn/${code}.png`} 
    alt="Clouds" 
  />
);

export default WeatherIcon;
