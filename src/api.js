import axios from 'axios';

const BASE_URL = 'https://book-crud-service-6dmqxfovfq-et.a.run.app/api/';

export const register = (name, email, password, password_confirmation) => {
  return axios.post(`${BASE_URL}register`, {name, email, password, password_confirmation});
};

export const login = (email, password) => {
  return axios.post(`${BASE_URL}login`, {email, password});
};