import React from 'react';
import styles from './Current.module.css';
import Meta from './components/Meta';
import Text from './components/Text';
import Temperature from '../Temperature';
import VerticalDivider from '../VerticalDivider';
import getWeather from '../../apis/getWeather';

const DEFAULT_CITY = {
  name: 'Melbourne',
  id: '2158177',
};

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  async getWeather() {
    const { id } = DEFAULT_CITY;

    const { data } = await getWeather(id);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div data-testid="CURRENT" className={styles.current}>
        {loading ? (
          <div className={styles.left}>
            <div className={styles.loading}>Loading...</div>
          </div>
        ) : (
          <React.Fragment>
            <div className={styles.left}>
              <div data-testid="TEMP" className={styles.temperature}>
                <Temperature>{data.main.temp}</Temperature>
              </div>
              <div data-testid="WEATHER" className={styles.weather}>
                <Text>{data.weather[0].main}</Text>
              </div>
              <div className={styles.metas}>
                <div data-testid="HUMIDITY" className={styles.humidity}>
                  <Meta title="HUMIDITY" value={`${data.main.humidity}%`} />
                </div>
                <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
                <div data-testid="WIND" className={styles.wind}>
                  <Meta title="WIND" value={`${data.wind.speed} K/M`} />
                </div>
              </div>
            </div>
            <div className={styles.right}>
            <h1 data-testid="NAME" className={styles.city}>{data.name}</h1>
            </div>
          </React.Fragment>
        )}
        <div className={styles.bottom} />
      </div>
    );
  }
}

export default Current;
