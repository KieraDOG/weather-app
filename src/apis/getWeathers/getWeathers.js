import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeathers = (ids) => OpenWeatherMap.get('/group', { 
  id: ids.join(','),
});

export default getWeathers;