- Components
- Props
- State
- Props + State = State lifting
- Lifecycle
- Fetch data = 异步 (axios) + Lifecycle + state

Weather App
- A React app, fetch real weather data, by styled-components

React 哲学
如何去写 React 功能

第一步：将设计好的 UI 划分为组件层级

理科：草稿，公式，反复验算，文科：大纲，论点论据
自我怀疑，自我否认

Readable, Matainable, Reusable

- apis
  - getCurrentWeatherData
  - get5DayForcast

- components
  - Temperature (Style)
  - WeatherImage (将字符串映射成图片)
  - Subtitle (Style)

- app
  - App (Style, Layout)
    - Current (Style, Layout)
      {api -> data: { cityName, temperature, weather, humidity, wind }, }
      [SubText]
      - Temperature (Style)
      - SubText (Style)
      - Metas (Layout)
        - Meta (Layout)
          - SubText (Style)
        - Meta (Layout)
          - SubText (Style)
      - Name (Style)
    - OtherCities (Layout)
      - Subtitle (Style)
      - City (Layout)
        - Name (Style)
        - Temperature (Style)
        - WeatherImage (将字符串映射成图片)
      - City (Layout)
      - City (Layout)
      n City (Layout)
    - Forecast (渲染5天天气)
      {get5DayForcast}
      - Subtitle (Style)
      - Day
        - DayOfWeek (Style)
        - WeatherImage (将字符串映射成图片)
        - Temperature (Style)
      - Day
      n Day

第二步：用 React 创建一个静态版本
第三步：确定 UI state 的最小（且完整）表示

- state 从哪里来
- state 的初始状态
- state 在那里发生改变
- state 需要渲染在哪里

第四步：确定 state 放置的位置
第五步：添加反向数据流

这就是全部了


4 个 City， Current 显示一个，Other Cities 显示剩下 3个 City

React 哲学

语意化，Sematic
