import OpenWeatherMap from '../../utils/OpenWeatherMap';

export default (ids) => OpenWeatherMap.get('/group', {
  params: {
    id: ids.join(','),
  },
});