import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { Button, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AccountHistory, Bankbook } from '../common/interfaces/Bankbook';
import { TotalBankbook } from '../components/bankbook';
import AccountHistoryList from '../components/bankbook/AccountHistoryList';
import Page from '../components/Page';
import { bankbookData } from '../utils/bankbookdata';
import BankbookDetailContainer from '../components/bankbook/BankbookDetailContainer';

const BankbookDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<Bankbook>({
    id: 0,
    title: '',
    balance: 0,
    tags: [],
    accountName: '',
    accountNumber: '',
    accountHistory: [],
    description: '',
  });

  const handleDepositButtonClick = (deposit: AccountHistory) => {
    const curBalance = data.balance;
    let curAccountHistory = _.cloneDeep(data.accountHistory);
    curAccountHistory.push(deposit);

    setData({
      ...data,
      balance: curBalance + deposit.amount,
      accountHistory: curAccountHistory,
    });
  };

  const handleWithdrawButtonClick = (withdraw: AccountHistory) => {
    const curBalance = data.balance;
    let curAccountHistory = _.cloneDeep(data.accountHistory);
    curAccountHistory.push(withdraw);

    setData({
      ...data,
      balance: curBalance - withdraw.amount,
      accountHistory: curAccountHistory,
    });
  };

  if (!id) return <span>not found page</span>;

  return (
    <Page>
      <BankbookDetailContainer id={Number(id)} />
    </Page>
  );
};

export default BankbookDetail;
