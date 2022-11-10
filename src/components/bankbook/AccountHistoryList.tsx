import React from 'react';
import { styled } from '@mui/material';
import { AccountHistory } from '../../common/interfaces/Bankbook';

const RootStyle = styled('div')({
  border: '1px solid skyblue',
});

interface AccountHistoryProps {
  data: AccountHistory[];
}

const AccountHistoryList = ({ data }: AccountHistoryProps) => {
  return (
    <RootStyle>
      <div>
        <div>입출금 내역</div>
        <div>
          {data.map((it, itIdx) => (
            <div
              style={{
                border:
                  it.type === '입금' ? '1px solid yellow' : '1px solid red',
              }}
            >
              <div>{it.type}</div>
              <div>{it.date}</div>
              <div>{it.amount}</div>
              <div>{it.memo}</div>
              <div>
                {it.tags.map((tag, tagidx) => (
                  <>{tag.title} </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RootStyle>
  );
};

export default AccountHistoryList;
