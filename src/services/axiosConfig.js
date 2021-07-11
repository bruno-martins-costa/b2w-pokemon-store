import axios from 'axios';

const apiBaseUrl = 'https://pokeapi.co/api/v2/';

export const api = axios.create({
  baseURL: apiBaseUrl,
});
