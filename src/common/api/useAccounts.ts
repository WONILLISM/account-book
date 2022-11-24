import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Bankbook } from '../interfaces/Bankbook';
import { createAccount, getAllAccounts } from './api';

export const useAccounts = () => {
  const queryClient = useQueryClient();

  const accounts = useQuery<Bankbook[], Error>(['accounts'], getAllAccounts, {
    onSuccess: () => {
      // console.log('데이터 불러오기 성공');
    },
    onError: () => {},
  });

  const create = useMutation(createAccount);

  return {
    accounts,
    create,
  };
};
