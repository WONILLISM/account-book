import axios from 'axios';
import { Bankbook } from '../interfaces/Bankbook';

const apiClient = axios.create({
  baseURL: 'http://152.70.88.101:3000/api',
  // baseURL: 'http://localhost:4000',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const getAllAccounts = async () => {
  const response = await apiClient('/accounts');
  return response.data;
};
