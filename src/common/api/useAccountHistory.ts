import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccountHistory, Bankbook } from '../interfaces/Bankbook';
import { createAccounthistory, getAccountHistory } from './api';

export const useAccountHistory = (id: number) => {
  const queryClient = useQueryClient();

  const accountHistory = useQuery<AccountHistory[], Error>(
    ['accountHistory', id],
    () => getAccountHistory(id),
    {},
  );

  const create = useMutation((history: AccountHistory) =>
    createAccounthistory(id, history),
  );

  return {
    accountHistory,
    create,
  };
};
