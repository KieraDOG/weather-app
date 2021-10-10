import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getWeather from '../../apis/getWeather';
import Temperature from '../../components/Temperature';
import background from './assets/background.jpeg';
import Metas from './components/Metas';
import SubText from './components/SubText';

const Container = styled.div`
  padding: 60px 80px;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  position: relative;
`;

const CurrentTemperature = styled.div`
  font-size: 5rem;
`;

const Weather = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const CityName = styled.h1`
  flex: 1;
  font-size: 2rem;
  text-align: right;
  margin-top: 16px;
`;

const Strip = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
  height: 24px;
`;

// City 是可变的时候？
// state

// 这个 App 现在跑不起来，请 list 原因，并附上解决方案

// 为什么 React 可以用新的 state 刷新页面
// React 怎么通过新的 state 刷新页面
// React setState, useState 之后发生了什么

// setState -> newState -> VDom 比较 oldState.VDom -> render (/w newState) -> 渲染

// VDOM
// 协调 Reconciliation

// 当我们讨论一个东西是可更改或者可变的时候，
// state
// 1. 定义初始化值，2. 定义 Handler，3. 应用 state

// class Current extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true,
//       // 1. 定义初始值，名字和类型，SOT（Source of truth / 真相的来源），衍生数据
//       // 可变的东西越小越好

//       cityId: MELBOURNE_CITY_ID,
//       // city: { id, name }, // id, name 是无用的
//       // Readable -> 侵犯了代码，好的 Readable 一定是不侵犯代码的
//       // 为什么不写注释，代码及注释
//     };

//     // 能不能放 constructor?
//     // 构造器
//     // Race Condition -> 竞争情况 -> 我们希望构造结束之后运行，我们却放在了构造中运行
//     // lifecycle
//   }

//   // constructor 
//   // -> componentDidMount 
//   // -> componentDidUpdate *
//   // -> componentWillUnmount

//   // 所有的 will 周期都是不可靠的，在以后的版本里面，将逐步放弃 will 周期

//   handleCityIdChange(cityId) {
//     this.setState({
//       cityId,
//     });
//   }

//   getWeatherByCityId() {
//     const { cityId } = this.state;

//     this.setState({
//       loading: true,
//     });

//     getWeather(cityId).then((response) => {
//       this.setState({
//         loading: false,
//         data: {
//           cityName: response.data.name,
//           temperature: response.data.main.temp,
//           humidity: response.data.main.humidity,
//           weather: response.data.weather[0].main,
//           wind: response.data.wind.speed,
//         },
//       });
//     });
//   }

//   componentDidMount() {
//     this.getWeatherByCityId();
//   }

//   componentDidUpdate(previousProps, previousState) {
//     const { cityId } = this.state;

//     if (previousState.cityId !== cityId) {
//       this.getWeatherByCityId();
//     }
//   }

//   render() {
//     const { data, loading } = this.state;

//     // 死循环
//     // 不能把 setData (setState) 放在 render
//     // 我们什么时候想要这个数据？
//     // 越早越好
//     // getWeather().then((response) => this.setData({
//     //   cityName: response.data.name,
//     //   temperature: response.data.main.temp,
//     //   weather: response.data.weather[0].main,
//     // }));

//     // constructor -> willMount -> render -> didMount ...

//     // TypeError: Cannot destructure property 'cityName' of 'data' as it is undefined.

//     console.log(this.state.cityId);

//     return (
//       <Container>
//         {/* Single Responsibility */}
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <>
//             <div>
//               <CurrentTemperature>
//                 <Temperature>{data.temperature}</Temperature>
//               </CurrentTemperature>
//               <Weather>
//                 <SubText>{data.weather}</SubText>
//               </Weather>
//               <Metas humidity={data.humidity} wind={data.wind} />
//               <button onClick={() => this.handleCityIdChange(SYDNEY_CITY_ID)}>Sydney</button>
//             </div>
//             <CityName>
//               {data.cityName}
//             </CityName>
//           </>
//         )}
//         <Strip />
//       </Container>
//     );
//   }
// }


const Current = ({
  cityId,
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getWeather(cityId).then((response) => setData({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].main,
      wind: response.data.wind.speed,
    }));
  }, [cityId]); 
  // 依赖，当依赖发生改变时，重新调用 useEffect
  // 当我们不传任何依赖时，useEffect 的依赖就永远不会改变，那么 useEffect 就只会执行一次
  // 模拟出来了 componentDidMount

  useEffect(() => {
    if (!data) {
      return;
    }

    setLoading(false);
  }, [data]);

  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <CurrentTemperature>
              <Temperature>{data.temperature}</Temperature>
            </CurrentTemperature>
            <Weather>
              <SubText>{data.weather}</SubText>
            </Weather>
            <Metas humidity={data.humidity} wind={data.wind} />
          </div>
          <CityName>
            {data.cityName}
          </CityName>
        </>
      )}
      <Strip />
    </Container>
  );
}

export default Current;
