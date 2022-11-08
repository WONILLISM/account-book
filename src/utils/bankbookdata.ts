import { Bankbook } from '../common/interfaces/Bankbook';

export const BankbookData: Bankbook[] = [
  {
    id: 0,
    title: '통장 1',
    balance: 1000000000,
    tags: [
      { id: 0, title: '생활비' },
      { id: 1, title: '용돈' },
    ],
  },
  {
    id: 1,
    title: '통장 2',
    balance: 3000000000,
    tags: [
      { id: 0, title: '생활비' },
      { id: 1, title: '용돈' },
    ],
  },
];
