import React from 'react';
import { styled } from '@mui/material';

const RootStyle = styled('div')({
  border: '1px solid skyblue',
});

const AccountHistory = () => {
  return (
    <RootStyle>
      <div>입출금 내역</div>
    </RootStyle>
  );
};

export default AccountHistory;
