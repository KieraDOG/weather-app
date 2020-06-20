import React from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';

export const CITIES = [{
  name: 'Melbourne',
  id: '2158177',
}, {
  name: 'Sydney',
  id: '2147714',
}, {
  name: 'Brisbane',
  id: '2174003',
}, {
  name: 'Perth',
  id: '2063523',
}];

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.getWeathers();
  }

  async getWeathers() {
    const ids = CITIES.map((c) => c.id);

    const { data } = await getWeathers(ids);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div data-testid="OTHER_CITIES" className={styles.otherCities}>
        <h2 className={styles.header}>Other Cities</h2>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <div className={styles.cities}>
            {data.list.map((item) => (
              <City 
                key={item.id}
                name={item.name} 
                temperature={parseInt(item.main.temp)}
                weather={{ 
                  icon: item.weather[0].icon, 
                  description: item.weather[0].main,
                }} 
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default OtherCities;