import React, { useState } from 'react';
// mui
import { IconButton, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAccounts } from '../../../common/api/useAccounts';
import { Bankbook } from '../../../common/interfaces/Bankbook';
import AppAddBankbookModal from './AppAddBankbookModal';
import AppBankbookCard from './AppBankbookCard';

const ContentStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,

  padding: '0px 24px 24px 24px',
  // margin: '0px 24px 24px 24px',

  // overflowX: 'auto',
});

const HeaderStyle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '24px 24px',
});

const RootStyle = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  borderRadius: 24,

  backgroundColor: '#333333',
});

const AppBankbookCardList = () => {
  const navigate = useNavigate();
  /** get accounts(bankbook) list */
  const { data, isLoading, isError, error } = useAccounts().accounts;
  /** open add account modal state */
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handleBankbookCardClick = (id: number) => {
    navigate(`/dashboard/bankbook/${id}`);
  };

  const handleAddBankbookClick = () => {
    setOpenAddModal(true);
  };

  const handleAddBankbookModalClose = () => {
    setOpenAddModal(false);
  };

  if (isLoading) return <span>loading...</span>;

  if (error || !Array.isArray(data)) return <span>error</span>;

  if (!data) return <span>not data</span>;

  return (
    <RootStyle>
      <HeaderStyle>
        <Typography variant='h4'>텅장</Typography>
        <IconButton onClick={handleAddBankbookClick}>
          <AddIcon />
        </IconButton>
      </HeaderStyle>

      <ContentStyle>
        {data.map((account, accountIdx) => (
          <AppBankbookCard
            key={accountIdx}
            bankbook={account}
            onClick={handleBankbookCardClick}
          />
        ))}
      </ContentStyle>
      <AppAddBankbookModal
        open={openAddModal}
        onClose={handleAddBankbookModalClose}
      />
    </RootStyle>
  );
};

export default AppBankbookCardList;
