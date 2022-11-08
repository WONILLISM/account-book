import React from 'react';
import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
}));

const DashboardLayout = () => {
  return (
    <RootStyle>
      <div>DashboardLayout</div>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
};

export default DashboardLayout;
