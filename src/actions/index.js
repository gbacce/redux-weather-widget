import axios from 'axios';
import configKey from '../config/config';

const API_key = configKey;
const baseURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${baseURL}&q=${cityName},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request 
  }
}