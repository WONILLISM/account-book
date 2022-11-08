import React from 'react';
import { Card, CardActionArea, styled } from '@mui/material';
import { Bankbook } from '../../../common/interfaces/Bankbook';

const RootStyle = styled(Card)(({ theme }) => ({
  width: '300px',
  minWidth: '300px',
}));

interface AppBankbookCardProps {
  bankbook: Bankbook;
  onClick: (id: number) => void;
}

const AppBankbookCard = ({ bankbook, onClick }: AppBankbookCardProps) => {
  return (
    <RootStyle>
      <CardActionArea onClick={() => onClick(bankbook.id)}>
        <div>{bankbook.title}</div>
        <div>{bankbook.balance}</div>
        <div>
          {bankbook.tags.map((tag, tagIdx) => (
            <span key={tagIdx}>{tag.title} </span>
          ))}
        </div>
      </CardActionArea>
    </RootStyle>
  );
};

export default AppBankbookCard;
