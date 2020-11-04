import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeather = (id) => OpenWeatherMap.get('/weather', { 
  id, 
});

export default getWeather;
