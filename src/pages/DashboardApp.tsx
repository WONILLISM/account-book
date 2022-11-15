import React from 'react';
import { Container, Grid } from '@mui/material';
import Page from '../components/Page';

import AppBankbookCardList from '../components/_dashboard/app/AppBankbookCardList';

const DashboardApp = () => {
  return (
    <Page>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppBankbookCardList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardApp;
