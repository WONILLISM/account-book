import React, { useState } from 'react';
import { Button, styled } from '@mui/material';
import { AccountHistory, Bankbook } from '../../common/interfaces/Bankbook';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';

const RootStyle = styled('div')({
  border: '1px solid white',
});

interface TotalBankbookProps {
  data: Bankbook;
  handleDeposit: (deposit: AccountHistory) => void;
  handleWithdraw: (withdraw: AccountHistory) => void;
}

const TotalBankbook = ({
  data,
  handleDeposit,
  handleWithdraw,
}: TotalBankbookProps) => {
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
      <div>
        <div>
          {data.accountName} {data.accountNumber}
        </div>
        <div>{data.balance}</div>
        <div>
          <Button type='button' onClick={handleDepositModalOpen}>
            입금
          </Button>
          <DepositModal
            open={openDeposit}
            onClose={handleDepositModalClose}
            handleDeposit={handleDeposit}
          />
          <Button type='button' onClick={handleWithdrawModalOpen}>
            출금
          </Button>
          <WithdrawModal
            open={openWithdraw}
            onClose={handleWithdrawModalClose}
            handleWithdraw={handleWithdraw}
          />
        </div>
      </div>
    </RootStyle>
  );
};

export default TotalBankbook;
