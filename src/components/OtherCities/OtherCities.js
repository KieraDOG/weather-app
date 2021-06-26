import React from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

// state
// initialize state -> state handler -> state usage / set state

// Code As Documentation

const OTHER_CITIES = [{
  name: 'Sydney', id: '2147714',
}, {
  name: 'Brisbane', id: '2174003',
}, {
  name: 'Perth', id: '2063523',
}];

// RMR
const getOtherCitiesWeather = () => {
  const otherCitiesId = OTHER_CITIES.map((city) => city.id).join(',');

  return OpenWeatherMap.get(`/group`, {
    params: {
      id: otherCitiesId,
    },
  }).then((response) => response.data);
}

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleDataChange(newData) {
    this.setState({
      data: newData,
    });
  }

  componentDidMount() {
    getOtherCitiesWeather().then(this.handleDataChange);
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return 'Loading';
    }

    return (
      <div className={styles.otherCities}>
        <h2 className={styles.header}>Other Cities</h2>
        <div className={styles.cities}>
          {data.list.map(({ id, name, main: { temp }, weather: [{ icon, main }] }) => (
            <City 
              key={id}
              name={name}
              temperature={temp}
              weather={{ icon, description: main }} 
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OtherCities;
