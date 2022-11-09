import { Bankbook, DefaultTag } from '../common/interfaces/Bankbook';

export const defaultTag: DefaultTag[] = [
  { id: 0, title: '생활비', isDisplay: true },
  { id: 1, title: '용돈', isDisplay: true },
  { id: 2, title: '기명진', isDisplay: true },
  { id: 3, title: '바보', isDisplay: true },
];

export const bankbookData: Bankbook[] = [
  {
    id: 0,
    title: '통장 1',
    balance: 1000000000,
    tags: [
      { id: 0, title: '생활비' },
      { id: 1, title: '용돈' },
    ],
    accountName: '국민은행',
    accountNumber: '1111-1111-1111',
    accountHistory: [],
  },
  {
    id: 1,
    title: '통장 2',
    balance: 3000000000,
    tags: [
      { id: 0, title: '생활비' },
      { id: 1, title: '용돈' },
    ],
    accountName: '신한은행',
    accountNumber: '1111-1111-1112',
    accountHistory: [],
  },
];
