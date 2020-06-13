import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (id) => OpenWeatherMap.get('/weather', {
  params: {
    id,
  },
});
