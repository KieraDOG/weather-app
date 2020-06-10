import React from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';

const OtherCities = () => (
  <div className={styles.otherCities}>
    <h2 className={styles.header}>Other Cities</h2>
    <div className={styles.cities}>
      <City 
        name="Sydney" 
        temperature="13"
        weather={{ icon: '09d', description: 'Rain' }} 
      />
      <City 
        name="Brisbane" 
        temperature="21"
        weather={{ icon: '11d', description: 'Thunderstorm' }} 
      />
      <City 
        name="Perth" 
        temperature="39"
        weather={{ icon: '02d', description: 'Clouds' }} 
      />
    </div>
  </div>
);

export default OtherCities;