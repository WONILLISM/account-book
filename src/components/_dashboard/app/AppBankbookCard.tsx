import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from '@mui/material';
import { Bankbook } from '../../../common/interfaces/Bankbook';

const ContentStyle = styled('div')({
  padding: '0px 24px 24px 24px',
});

const TitleStyle = styled('div')({
  padding: '24px 24px 0px 24px',
});

const RootStyle = styled(Card)(({ theme }) => ({
  width: '300px',
  minWidth: '300px',

  borderRadius: 24,

  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
}));

interface AppBankbookCardProps {
  bankbook: Bankbook;
  onClick: (id: number) => void;
}

const AppBankbookCard = ({ bankbook, onClick }: AppBankbookCardProps) => {
  return (
    <RootStyle>
      <CardActionArea onClick={() => onClick(bankbook.id)}>
        <TitleStyle>
          <Typography variant='subtitle2'>
            {bankbook.accountName} 통장 {bankbook.accountNumber}
          </Typography>
          {/* <Typography variant='subtitle1'></Typography> */}
        </TitleStyle>
        <ContentStyle>
          <Typography variant='h5'>
            {Number(bankbook.balance).toLocaleString()}
          </Typography>
        </ContentStyle>
      </CardActionArea>
    </RootStyle>
  );
};

export default AppBankbookCard;
