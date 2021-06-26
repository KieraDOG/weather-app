import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';
const units = 'metric';
const appid = '2466213f21b4b723d341e00a430a7673';

const OpenWeatherMap = axios.create({
  baseURL,
  params: {
    units,
    appid,
  }
});

export default OpenWeatherMap;
