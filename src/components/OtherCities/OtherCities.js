import React from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

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

// Readable, Maintainable, Reusable

/**
 * Readable
 * 
 * v Object.keys -> url.searchParams -> url -> fetch(url)
 * v 代码逻辑跨度很长
 * 
 *  */

/**
 * Maintainable
 * 
 * v 如果想要增删 params， 我需要理解 Object.keys -> url.searchParams -> url
 * 
 *  */


/**
 * Reusable
 * 
 * v getWeathers CITIES, 如果别的 Component 想要 Get 别的 cities 的 weathers?
 * v 复制很多重复的 fetch 和 params 的基本代码。
 * 
 *  */

// 代码能力问题?
// 我代码能力或者知识储备不能完成这样复杂的重构
// axios!!! 取代 fetch

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      loading: true,

      toggle: false,
    }
  }

  componentDidMount() {
    this.getWeathers();
  }

  async getWeathers() {
    const ids = CITIES.map((c) => c.id);
    const data = await getWeathers(ids);

    this.setState({
      data,
      loading: false,
    });
  }

  render() {
    const { data, loading, toggle } = this.state;

    return (
      <div data-testid="OTHER_CITIES" className={styles.otherCities}>
        {!toggle && (
          <button 
            className={styles.toggle} 
            onClick={() => this.setState((s) => ({ toggle: !s.toggle }))}
          >
            View More Cities ...
          </button>
        )}
        <div className={cx('container', { active: toggle })}>
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
      </div>
    )
  }
}

export default OtherCities;