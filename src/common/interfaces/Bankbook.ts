export interface DefaultTag {
  id: number;
  title: string;
  isDisplay: boolean;
}

export interface Tag {
  id: number;
  title: string;
}

export interface AccountHistory {
  date: string;
  amount: number;
  type: '입금' | '출금' | '초기화';
  memo: string;
  tags: Tag[];
}

export interface Bankbook {
  id: number;
  title: string;
  balance: number;
  tags: Tag[];
  accountName: string;
  accountNumber: string;
  accountHistory: AccountHistory[];
  description?: string;
}
