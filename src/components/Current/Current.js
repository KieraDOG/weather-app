import React from 'react';
import styles from './Current.module.css';
import Meta from './components/Meta';
import Text from './components/Text';
import Temperature from '../Temperature';
import VerticalDivider from '../VerticalDivider';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

// 调用 API，更新天气数据
// state
// 1. 做 class component
// 2. 初始化 state
// 3. 新建 state 相应的 handler， 并 bind this
// 4. 在 render 中使用 state
// 5. 在相应的地方更改 state

// 在什么时候更新 weather ?
// 在 api 请求成功后，使用 api 数据更新 weather

// 如何在 React 中请求 api
// 在什么地方 调用 getCurrentCityWeather ?

// 在 render 里面调用 -> 成功的拿到了 data -> console.log -> setState

// class List extends React.Component {
//   componentDidUpdate() {
//     // props 发生改变

//     console.log('componentDidUpdate');
//   }

//   render() {
//     const { items } = this.props;

//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item.key}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// class Header extends React.component {
//   componentDidUpdate() {
//     console.log('componentDidUpdate'); // 1.
//   }

//   render() {
//     console.log('render'); // 2.

//     return (
//       <h2>Students</h2>
//     );
//   }
// }

// // 3. 都不 log

// class Parent extends React.component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       students: [],
//     };
//   }

//   setStudents(newStudents) {
//     this.setState({
//       students: newStudents,
//     });
//   }

//   componentDidMount() {
//     getStudents().then((data) => this.setStudents(data));
//   }
  
//   // * state 改变 -> re-render -> render / function -> reconciliation (VDom) -> 更新实际Dom，浏览器内容

//   render() {
//     const { students } = this.state;

//     return (
//       <>
//         <Header />
//         <List items={students} />
//       </>
//     )
//   }
// }

/**
 * componentWillMount
 * componentDidMount
 * 
 * React -> 当你看到你的浏览器内容发生了[更新]，那么其背后 React 发生了什么？
 * state!!!
 * state 改变 -> re-render -> render / function -> reconciliation (VDom) -> 更新实际Dom，浏览器内容
 * 从 Component 的角度考虑，React 更新一定是由 state 改变引起的吗？
 * props 改变也会触发 re-render 吗?
 * 
 * React 会在以下那种情况进行协调 （reconciliation）
 * 1. props 改变
 * 2. state 改变 v
 * 3. both
 * 
 * 所有的更新都是由 state 更新触发的 !!! 所有的更新都是由 state 更新触发的 !!! 所有的更新都是由 state 更新触发的 !!!
 * 
 * 
 * componentWillReceiveProps (*)
 * componentWillUpdate (*)
 * componentDidUpdate (*)
 * 
 * componentWillUnmount
 * 
 * */

// 1. JSX (refs), 2. Component class / function, 3. state (state lifting), 4. props, 5. lifecycle
// 1. 1. JSX, 2. function component,  3. props,  4.hooks

// JSON 是用字符串的形式表达 JS Object
// JavaScript Object Nomination
// 在 JS 里拥有两个方法, stringfy | parse
// stringfy 是把 JS object 转化为 JSON
// parse 是把 JSON 转化为 JS object

// lifecycle
// 组件的生命周期
// 生命，出生到死亡
// 组件的出生到死亡所经历的步骤



  // 死循环
  // dead loop
  // 0.5c $0.005 1s 5000
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render
  // getCurrentCityWeather -> this.setState -> re-render

  // setState 一定一定一定 重要的事情说3遍，不能在 render 里直接调用

// Variable Naming READABLE
const MELBOURNE_CITY_ID = '2158177'; // readable

// RMR
const getCurrentCityWeather = () => OpenWeatherMap.get('/weather', {
  params: {
    id: MELBOURNE_CITY_ID,
  },
}).then((response) => response.data);

// construct { data: undefined } -> render -> componentDidMount -> getCurrentWeather -> setState { data: 数据 } -> render

// 1. &&
// 2. 初始值
// 3. loading

class Current extends React.Component {
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
  };

  componentDidMount() {
    getCurrentCityWeather().then(this.handleDataChange);
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return 'Loading';
    }

    return (
      <div className={styles.current}>
        <div className={styles.left}>
          <div className={styles.temperature}>
            <Temperature>{data.main.temp}</Temperature>
          </div>
          <div className={styles.weather}>
            <Text>{data.weather[0].main}</Text>
          </div>
          <div className={styles.metas}>
            <div className={styles.humidity}>
              <Meta title="HUMIDITY" value={`${data.main.humidity}%`} />
            </div>
            <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
            <div className={styles.wind}>
              <Meta title="WIND" value={`${data.wind.speed} KM/H`} />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.city}>Melbourne</h1>
        </div>
        <div className={styles.bottom} />
      </div>
    )
  }
}

export default Current;
