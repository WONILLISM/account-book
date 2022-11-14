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
            {/* <Box
              sx={{
                width: '100%',
                display: 'flex',
                gap: 3,
                overflowX: 'auto',
              }}
            >
              {books.map((item, itemIdx) => (
                <AppBankbookCard
                  key={itemIdx}
                  bankbook={item}
                  onClick={handleBankbookCardClick}
                />
              ))}
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardApp;
