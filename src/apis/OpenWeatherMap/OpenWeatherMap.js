import axios from "axios";

const APP_ID = '2466213f21b4b723d341e00a430a7673';

const OpenWeatherMap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: APP_ID,
    units: 'metric',
  },
});

export default OpenWeatherMap;
