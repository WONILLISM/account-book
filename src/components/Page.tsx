import React, { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

const RootStyle = styled(Box)(({ theme }) => ({
  // backgroundColor: 'skyblue',
}));

interface PageProps {
  children: ReactNode;
  title?: string;
}

const Page = ({ children, title }: PageProps) => {
  return <RootStyle>{children}</RootStyle>;
};

export default Page;
