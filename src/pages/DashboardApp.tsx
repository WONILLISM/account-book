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
import { bankbookData } from '../utils/bankbookdata';
import AppAddBankbookModal from '../components/_dashboard/app/AppAddBankbookModal';
import { SubmitHandler } from 'react-hook-form';

const DashboardTitleBoxStyle = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: 5,
});

const DashboardApp = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Bankbook[]>(bankbookData);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handleAddBankBookSubmit: SubmitHandler<Bankbook> = (data) => {
    console.log(data);
    setBooks([...books, data]);
  };

  const handleBankbookCardClick = (id: number) => {
    navigate(`/dashboard/bankbook/${id}`);
  };

  const handleAddBankbookClick = () => {
    setOpenAddModal(true);
  };

  const handleAddBankbookModalClose = () => {
    setOpenAddModal(false);
  };

  return (
    <Page>
      <Container maxWidth='lg'>
        <DashboardTitleBoxStyle>
          <Typography variant='h4'>유진이의 텅장</Typography>
          <IconButton onClick={handleAddBankbookClick}>
            <AddIcon />
          </IconButton>
        </DashboardTitleBoxStyle>
        <AppAddBankbookModal
          open={openAddModal}
          onClose={handleAddBankbookModalClose}
          onSubmit={handleAddBankBookSubmit}
        />
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
