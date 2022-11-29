import React from 'react';
import { styled, Typography } from '@mui/material';
import { AccountHistory } from '../../common/interfaces/Bankbook';

const TagStyle = styled('div')({
  minWidth: '50px',
  padding: '4px 8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  border: '1px solid blue',
  borderRadius: '1.5em',
  backgroundColor: '#FFFFFF',

  fontSize: '12px',
  fontWeight: 'bold',
});

const SubContentStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 12px 16px 12px',

  '& .memo': {},
  '& .tags': {},
});

const ContentStyle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0px 20px',
});

const HeaderStyle = styled('div')({
  padding: '8px',
});

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  // padding: '20px',
});

interface AccountHistoryItemProps {
  data: AccountHistory;
}

const AccountHistoryItem = ({ data }: AccountHistoryItemProps) => {
  return (
    <RootStyle
      sx={{
        backgroundColor:
          data.type === '입금'
            ? '#42a5f555'
            : data.type === '출금'
            ? '#ef535055'
            : '#EEEEEE',
      }}
    >
      <HeaderStyle>
        <Typography variant='subtitle2'>{data.date}</Typography>
      </HeaderStyle>
      <ContentStyle>
        <Typography variant='subtitle1'>
          {data.type === '초기화' ? '' : data.type}
        </Typography>
        <Typography variant='h6'>
          {data.type === '입금' ? '+' : data.type === '출금' ? '-' : ''}
          {Number(data.amount).toLocaleString()}원
        </Typography>
      </ContentStyle>
      <SubContentStyle>
        <div className='memo'>
          <Typography variant='caption'>memo</Typography>
          <Typography variant='subtitle2'>{data.memo}</Typography>
        </div>
        <div className='tags'>
          {data.tags.map((tag, tagIdx) => (
            <TagStyle>{tag.title}</TagStyle>
          ))}
        </div>
      </SubContentStyle>
    </RootStyle>
  );
};

export default AccountHistoryItem;
