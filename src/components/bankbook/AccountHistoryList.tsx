import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useAccountHistory } from '../../common/api/useAccountHistory';
import AccountHistoryItem from './AccountHistoryItem';

const HistoryItemListStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ContentStyle = styled('div')({});

const HeaderStyle = styled('div')({});

const RootStyle = styled('div')({});

interface AccountHistoryProps {
  id: number;
}

const AccountHistoryList = ({ id }: AccountHistoryProps) => {
  const { data, isLoading, isError, error } =
    useAccountHistory(id).accountHistory;

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>error: {error.message}</span>;

  if (!data) return <span>not data</span>;

  return (
    <RootStyle>
      <div>
        <HeaderStyle>
          <Typography variant='subtitle1'>입출금 내역</Typography>
        </HeaderStyle>

        <ContentStyle>
          <HistoryItemListStyle>
            {data.map((item, itemIdx) => (
              <AccountHistoryItem data={item} />
            ))}
          </HistoryItemListStyle>
        </ContentStyle>
      </div>
    </RootStyle>
  );
};

export default AccountHistoryList;
