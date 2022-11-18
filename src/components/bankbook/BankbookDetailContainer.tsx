import React from 'react';
import { Container, Grid, styled } from '@mui/material';
import { useAccount } from '../../common/api/useAccount';
import AccountHistoryList from './AccountHistoryList';
import TotalBankbook from './TotalBankbook';

const RootStyle = styled('div')({
  backgroundColor: '#333333',
  padding: '0px 24px',
});

interface BankbookDetailContainerProps {
  id: number;
}

const BankbookDetailContainer = ({ id }: BankbookDetailContainerProps) => {
  const { data, isLoading, isError, error } = useAccount(id).account;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>error!! : {error.message}</span>;

  if (!data) return <span>not data</span>;

  return (
    <Container maxWidth='lg'>
      <RootStyle>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalBankbook data={data} />
          </Grid>
          <Grid item xs={12}>
            {/* <AccountHistoryList
          // data={data.accountHistory}
          /> */}
          </Grid>
        </Grid>
      </RootStyle>
    </Container>
  );
};

export default BankbookDetailContainer;
