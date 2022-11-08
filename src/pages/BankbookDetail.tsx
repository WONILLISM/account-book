import { styled } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const RootStyle = styled('div')({});

const BankbookDetail = () => {
  const { id } = useParams();
  return <RootStyle>{id}</RootStyle>;
};

export default BankbookDetail;
