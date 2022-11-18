import axios from 'axios';
import { Bankbook } from '../interfaces/Bankbook';

const apiClient = axios.create({
  baseURL: 'http://152.70.88.101:3000/api',
});

export const getAllAccounts = async () => {
  const response = await apiClient.get('/accounts');
  return response.data;
};

export const getAccount = async (id: number) => {
  const response = await apiClient.get(`/accounts/${id}`);
  return response.data;
};

export const createAccount = async (account: Bankbook) => {
  const response = await apiClient.post('/accounts', account);
  return response.data;
};
