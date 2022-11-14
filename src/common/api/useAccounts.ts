import { useQuery, useQueryClient } from 'react-query';
import { Bankbook } from '../interfaces/Bankbook';
import { getAllAccounts } from './api';

export const useAccounts = () => {
  const queryClient = useQueryClient();

  const accounts = useQuery<Bankbook[], Error>(['accounts'], getAllAccounts, {
    retry: false,
    onSuccess: () => {
      // console.log('데이터 불러오기 성공');
    },
    onError: () => {},
  });

  return {
    accounts,
  };
};
