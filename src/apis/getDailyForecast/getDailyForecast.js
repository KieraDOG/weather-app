import OpenWeatherMap from "../OpenWeatherMap";

const getDailyForecast = (id) => OpenWeatherMap.get('/onecall', {
  params: {
    id,
  },
});

export default getDailyForecast;
