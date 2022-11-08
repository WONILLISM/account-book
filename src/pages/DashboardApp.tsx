import React, { useState } from 'react';
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import Page from '../components/Page';
import { AppBankbookCard } from '../components/_dashboard/app';

import AddIcon from '@mui/icons-material/Add';

import { Bankbook } from '../common/interfaces/Bankbook';
import { useNavigate } from 'react-router-dom';
import { BankbookData } from '../utils/bankbookdata';

const DashboardTitleBoxStyle = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: 5,
});

const DashboardApp = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Bankbook[]>(BankbookData);

  const handleBankbookAddClick = (bankbookInfo: Bankbook) => {
    setBooks([...books, { ...bankbookInfo }]);
  };

  const handleBankbookCardClick = (id: number) => {
    navigate(`/dashboard/bankbook/${id}`);
  };

  return (
    <Page>
      <Container maxWidth='xl'>
        <DashboardTitleBoxStyle>
          <Typography variant='h4'>유진이의 텅장</Typography>
          <IconButton
            onClick={() => {
              handleBankbookAddClick({
                id: BankbookData.length,
                title: '텅장',
                balance: 0,
                tags: [{ title: '가스비' }],
              });
            }}
          >
            <AddIcon />
          </IconButton>
        </DashboardTitleBoxStyle>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default DashboardApp;
