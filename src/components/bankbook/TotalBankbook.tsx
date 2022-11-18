import React, { useState } from 'react';
import { Button, styled, Typography } from '@mui/material';
import { AccountHistory, Bankbook } from '../../common/interfaces/Bankbook';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';

const ContentStyle = styled('div')({});

const HeaderStyle = styled('div')({
  padding: '20px 0px',
});

const RootStyle = styled('div')({
  // borderRadius: 24,
  // backgroundColor: '#333333',
});

interface TotalBankbookProps {
  data: Bankbook;
}

const TotalBankbook = ({ data }: TotalBankbookProps) => {
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
        <div>
          <Button type='button' onClick={handleDepositModalOpen}>
            입금
          </Button>
          <DepositModal
            open={openDeposit}
            onClose={handleDepositModalClose}
            // handleDeposit={handleDeposit}
          />
          <Button type='button' onClick={handleWithdrawModalOpen}>
            출금
          </Button>
          <WithdrawModal
            open={openWithdraw}
            onClose={handleWithdrawModalClose}
            // handleWithdraw={handleWithdraw}
          />
        </div>
      </ContentStyle>
    </RootStyle>
  );
};

export default TotalBankbook;
