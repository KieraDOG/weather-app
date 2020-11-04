import { OPEN_WEATHER_MAP_APP_ID } from '../../config';
import { UNITS } from '../../constants';

const OpenWeatherMap = {};

const basePath = 'https://api.openweathermap.org/data/2.5';
const defaultParams = {
  units: UNITS,
  appid: OPEN_WEATHER_MAP_APP_ID,
};

OpenWeatherMap.post = (url, data) => {};

OpenWeatherMap.get = (url, params) => {
  const thisURL = new URL(`${basePath}${url}`);
  const thisParams = {
    ...defaultParams,
    ...params,
  };

  Object.keys(thisParams).forEach((key) => {
    const value = thisParams[key];

    thisURL.searchParams.append(key, value);
  });

  return fetch(thisURL, { method: 'GET' }).then((response) => response.json());
};

OpenWeatherMap.put = (url, data) => {};

OpenWeatherMap.delete = (url, params) => {};


export default OpenWeatherMap;