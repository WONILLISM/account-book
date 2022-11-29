import React, { useState } from 'react';
import { styled, Typography } from '@mui/material';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import { useAccount } from '../../common/api/useAccount';

const ContentStyle = styled('div')({});

const HeaderStyle = styled('div')({
  padding: '20px 0px',
});

const RootStyle = styled('div')({});

interface TotalBankbookProps {
  id: number;
}

const TotalBankbook = ({ id }: TotalBankbookProps) => {
  const { data, isLoading, isError, error } = useAccount(id).account;

  const [openDeposit, setOpenDeposit] = useState<boolean>(false);
  const [openWithdraw, setOpenWithdraw] = useState<boolean>(false);

  const handleDepositModalOpen = () => {
    setOpenDeposit(true);
  };

  const handleDepositModalClose = () => {
    setOpenDeposit(false);
  };

  const handleWithdrawModalOpen = () => {
    setOpenWithdraw(true);
  };

  const handleWithdrawModalClose = () => {
    setOpenWithdraw(false);
  };

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>error!! : {error.message}</span>;

  if (!data) return <span>not data</span>;

  return (
    <RootStyle>
      <HeaderStyle>
        <Typography variant='h5'>{data.title}</Typography>
        <Typography variant='subtitle2'>{data.description}</Typography>
      </HeaderStyle>
      <ContentStyle>
        <Typography variant='subtitle1'>
          {data.accountName} {data.accountNumber}
        </Typography>
        <Typography variant='h4'>
          {Number(data.balance).toLocaleString()}원
        </Typography>
        <div style={{ marginTop: '20px', display: 'flex', gap: '16px' }}>
          <DepositModal id={data.id} />
          <WithdrawModal id={data.id} />
        </div>
      </ContentStyle>
    </RootStyle>
  );
};

export default TotalBankbook;
