import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useAccountHistory } from '../../common/api/useAccountHistory';

const HistoryItemStyle = styled('div')((theme) => ({
  display: 'flex',
  padding: '20px',
}));

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
          <div>
            {data.map((it, itIdx) => (
              <HistoryItemStyle
                sx={{
                  backgroundColor:
                    it.type === '입금' ? '#42a5f555' : '#ef535055',
                }}
              >
                <div>{it.date}</div>
                <div>{it.type}</div>
                <div>
                  {it.type === '입금' ? '+' : '-'}
                  {it.amount}
                </div>
                <div>{it.memo}</div>
                <div>
                  {it.tags.map((tag, tagidx) => (
                    <>{tag.title} </>
                  ))}
                </div>
              </HistoryItemStyle>
            ))}
          </div>
        </ContentStyle>
      </div>
    </RootStyle>
  );
};

export default AccountHistoryList;
