import axios from 'axios';
import moment from 'moment';
import { AccountHistory, Bankbook } from '../interfaces/Bankbook';

const apiClient = axios.create({
  baseURL: 'http://152.70.88.101:3000/api',
});

export const getAllAccounts = async () => {
  const response = await apiClient.get('/accounts');
  return response.data.data;
};

export const getAccount = async (id: number) => {
  const response = await apiClient.get(`/accounts/${id}`);
  return response.data.data;
};

export const createAccount = async (account: Bankbook) => {
  let initHistory: AccountHistory[] = [];
  // const today = new Date();
  const today = moment();

  initHistory.push({
    date: today.format('YYYY-MM-DD'),
    amount: account.balance,
    type: '초기화',
    memo: '',
    tags: [],
  });

  const response = await apiClient.post('/accounts', {
    ...account,
    accountHistory: initHistory,
  });
  return response.data;
};

export const getAccountHistory = async (id: number) => {
  const response = await apiClient.get(`/accounts/${id}/history`);
  return response.data.data;
};

export const createAccounthistory = async (
  id: number,
  history: AccountHistory,
) => {
  const response = await apiClient.post(`/accounts/${id}`, history);
  return response.data;
};
