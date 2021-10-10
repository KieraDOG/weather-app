import OpenWeatherMap from "../OpenWeatherMap";

const getWeathers = (id) => OpenWeatherMap.get('/group', {
  params: {
    id,
  },
});

export default getWeathers;
