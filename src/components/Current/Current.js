import React from 'react';
import styles from './Current.module.css';
import Meta from './components/Meta';
import Text from './components/Text';
import Temperature from '../Temperature';
import VerticalDivider from '../VerticalDivider';

const Current = () => (
  <div className={styles.current}>
    <div className={styles.left}>
      <div className={styles.temperature}>
        <Temperature>12</Temperature>
      </div>
      <div className={styles.weather}>
        <Text>CLOUDY</Text>
      </div>
      <div className={styles.metas}>
        <div className={styles.humidity}>
          <Meta title="HUMIDITY" value="64%" />
        </div>
        <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
        <div className={styles.wind}>
          <Meta title="WIND" value="12 K/M" />
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <h1 className={styles.city}>Melbourne</h1>
    </div>
    <div className={styles.bottom} />
  </div>
);

export default Current;
