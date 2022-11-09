import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bankbook } from '../common/interfaces/Bankbook';
import { TotalBankbook } from '../components/bankbook';
import AccountHistory from '../components/bankbook/AccountHistory';
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

  useEffect(() => {
    if (id) {
      setData(bankbookData[Number(id)]);
    }
  }, []);
  console.log(data);
  return (
    <Page>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalBankbook data={data} />
          </Grid>
          <Grid item xs={12}>
            <AccountHistory />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default BankbookDetail;
