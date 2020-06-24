import React from 'react';
import styles from './App.module.css';
import Current from './components/Current';
import OtherCities from './components/OtherCities';
import VerticalDivider from './components/VerticalDivider';
import Forecast from './components/Forecast';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.weather}>
          <div className={styles.top}>
            <Current />
          </div>
          <div className={styles.bottom}>
            <OtherCities />
            <VerticalDivider className={styles.verticalDivider} color="rgba(0, 0, 0, 0.1)" width="3px" />
            <Forecast />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
