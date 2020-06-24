import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (id) => OpenWeatherMap.get('/forecast', {
  params: {
    id,
  },
});