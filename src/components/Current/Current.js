import React from 'react';
import styles from './Current.module.css';
import Meta from './components/Meta';
import Text from './components/Text';
import Temperature from '../Temperature';
import VerticalDivider from '../VerticalDivider';
import { OPEN_WEATHER_MAP_APP_ID } from '../../config';
import { UNITS } from '../../constants';
import getWeather from '../../apis/getWeather';

const DEFAULT_CITY = {
  name: 'Melbourne',
  id: '2158177',
};

// 静态 - 开发者在开发的过程中将内容 Hard Code 在代码中，浏览器加载时加载代码同时拿到内容
// 动态 - 开发者在开发的过程中将如何获取内容的方式写在代码中，浏览器加载时根据提供的加载方式拿到内容

// 异步的
// a). 浏览器加载代码中静态数据 b). 根据提供的方式加载动态数据 (并行)

// 获取内容的方式？ (network -> 调用后端[Java API] 通过 request 换 response)
// (开发者已经写好了如何获取内容的方式) 什么时候后加载数据？(Lifecycle / 按需 { 用户点击 Button })
// 怎么加载数据？
// ...

const getWeatherXMLHttpRequest = (onSuccess, onFail) => {
  // https://api.openweathermap.org/data/2.5/weather?id=2158177&units=metric&appid=2466213f21b4b723d341e00a430a7673

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    // 上古写法:
    // 大量使用 this
    // 需要一部分的 knowledge
    // 要做一些额外的事情
    // 不够 Readable, Maintainable, Reusable
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.response);
      onSuccess(data);

      return;
    }

    if (onFail) {
      onFail({ status: this.status, response: this.response });
    }
  }

  xhttp.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=2158177&units=metric&appid=2466213f21b4b723d341e00a430a7673', true);
  xhttp.send();
};

// XHTTP (< 1%), fetch (80%), axios (15%), others (4%)

const getWeatherFetch = () => {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  
  const params = {
    id: DEFAULT_CITY.id,
    units: UNITS,
    appid: OPEN_WEATHER_MAP_APP_ID,
  };

  Object.keys(params).forEach((key) => {
    const value = params[key];

    url.searchParams.append(key, value);
  });

  return fetch(url, {
    method: 'GET',
  }).then((response) => response.json());
}

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: undefined,
    };
  }

  // 需求：当浏览器加载的时候获取数据，更新页面

  // componentWillMount -> 1. render -> componentDidMount -> getWeather -> setState -> 2. render
  // React 异步陷阱
  // 1. render, 
  // what is loading? true
  // what is data? 在 constructor 生命的初始 state
  // 2. render, 
  // what is loading? false
  // what is data? getWeather 返回的数据

  componentWillMount() { 
    // 只会被调用一次
    // will 不可靠，有可能被调用多次
    // 假如这个 api 很贵，调用一次要 $1000.00
    // 坚决抵制 will* lifecycle
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    getWeather(DEFAULT_CITY.id).then((data) => {
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    const { data, loading } = this.state;

    // console.log('data', data);
    // console.log('loading', loading);

    // 我们能不能在 render 里面 setState?
    // No! Dead Loop
    // render -> getWeather -> setState -> render -> getWeather -> setState -> render -> getWeather -> setState

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
                {/* Cannot read property 'main' of undefined */}
                {/* data is undefined */}
                {/* data 为什么是 undefined */}
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
