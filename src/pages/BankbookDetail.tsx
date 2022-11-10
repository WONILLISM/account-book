import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import { Button, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AccountHistory, Bankbook } from '../common/interfaces/Bankbook';
import { TotalBankbook } from '../components/bankbook';
import AccountHistoryList from '../components/bankbook/AccountHistoryList';
import Page from '../components/Page';
import { bankbookData } from '../utils/bankbookdata';

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

  useEffect(() => {
    if (id) {
      setData(bankbookData[Number(id)]);
    }
  }, []);

  return (
    <Page>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalBankbook
              data={data}
              handleDeposit={handleDepositButtonClick}
              handleWithdraw={handleWithdrawButtonClick}
            />
          </Grid>
          <Grid item xs={12}>
            <AccountHistoryList data={data.accountHistory} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default BankbookDetail;
