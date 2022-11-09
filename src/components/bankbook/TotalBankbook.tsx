import React from 'react';
import { Button, styled } from '@mui/material';
import { Bankbook } from '../../common/interfaces/Bankbook';

const RootStyle = styled('div')({
  border: '1px solid white',
});

interface TotalBankbookProps {
  data: Bankbook;
}

const TotalBankbook = ({ data }: TotalBankbookProps) => {
  return (
    <RootStyle>
      <div>
        <div>
          {data.accountName} {data.accountNumber}
        </div>
        <div>{data.balance}</div>
        <div>
          <Button>입금</Button>
          <Button>출금</Button>
        </div>
      </div>
    </RootStyle>
  );
};

export default TotalBankbook;
