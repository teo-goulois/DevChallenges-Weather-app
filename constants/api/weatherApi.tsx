import Axios from 'axios';

export const weatherApi = Axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});