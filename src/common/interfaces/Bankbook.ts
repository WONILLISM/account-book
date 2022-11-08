export interface BankbookTag {
  title: string;
}

export interface Bankbook {
  id: number;
  title: string;
  balance: number;
  tags: BankbookTag[];
}