import React from 'react';
import styles from './Forecast.module.css';
import Weather from './components/Weather';

const Forecast = () => (
  <div data-testid="FORECAST" className={styles.forecast}>
    <h2 className={styles.header}>Forecast</h2>
    <div className={styles.weathers}>
      <Weather
        day="MON" 
        temperature="9"
        weather={{ icon: '11d', description: 'Thunderstorm' }} 
      />
      <Weather 
        day="TUE" 
        temperature="15"
        weather={{ icon: '01d', description: 'Clear' }} 
      />
      <Weather 
        day="WED" 
        temperature="11"
        weather={{ icon: '03d', description: 'Clouds' }} 
      />
      <Weather 
        day="THU" 
        temperature="7"
        weather={{ icon: '50d', description: 'Mist' }} 
      />
      <Weather 
        day="FRI" 
        temperature="8"
        weather={{ icon: '09d', description: 'Rain' }} 
      />
    </div>
  </div>
);

export default Forecast;