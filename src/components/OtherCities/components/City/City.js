import React from 'react';
import styles from './City.module.css';
import Temperature from '../../../Temperature';

const City = ({
  name,
  weather,
  temperature,
}) => (
  <div className={styles.city}>
    <h3 className={styles.name}>{name}</h3>
    <div className={styles.temperature}>
      <Temperature>{temperature}</Temperature>
    </div>
    <div className={styles.weather}>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />
      <span>{weather.description}</span>
    </div>
  </div>
);

export default City;
