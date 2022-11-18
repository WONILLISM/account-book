import { useQuery, useQueryClient } from 'react-query';
import { Bankbook } from '../interfaces/Bankbook';
import { getAccount } from './api';

export const useAccount = (id: number) => {
  const queryClient = useQueryClient();

  const account = useQuery<Bankbook, Error>(
    ['account', id],
    () => getAccount(id),
    {},
  );

  return {
    account,
  };
};
