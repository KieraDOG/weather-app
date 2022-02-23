1. Readable Maintainable Reusable

2. SOLID

3. React 哲学

React 最棒的部分之一是引导我们思考如何构建一个应用 （声明式编程）。在这节课中，我们将会通过 React 构建一个应用领会 React 哲学。

从设计稿开始
第一步：将设计好的 UI 划分为组件层级 （Component）
第二步：用 React 创建一个静态版本 (CSS + HTML / props)
第三步：确定 UI state 的最小（且完整）表示
第四步：确定 state 放置的位置（State Lifiting）
第五步：添加反向数据流（State Lifiting）
这就是全部了

从复用角度出发的 Component
从业务逻辑角度出发的 Component

Component 的名字要有意义，要能够描述自己，不应该需要借助其他 Context

自我怀疑，自我否定，自我学习

在 React 里，我怎么复用 style？

- Header
- Temperature
- WeatherIcon

- App
  - CurrentCity 
    - Temperature 
    - Outlook 

    - Attribute
    - Humidity 
    - WindSpeed 
    
    - CityName
  - OtherCities 
    - Header
    - CityList
      - CityName
      - Temperature
      - WeatherIcon
  - Forecast
    - Header
    - DayList
      - Day
      - WeatherIcon
      - Temperature
