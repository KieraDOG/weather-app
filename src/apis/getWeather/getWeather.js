import OpenWeatherMap from "../OpenWeatherMap";

const getWeather = (id) => OpenWeatherMap.get('/weather', {
  params: {
    id,
  },
});

export default getWeather;
