import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AccountHistory } from '../../common/interfaces/Bankbook';

interface WithdrawModalProps {
  open: boolean;
  onClose: () => void;
  handleWithdraw: (deposit: AccountHistory) => void;
}

const WithdrawModal = ({
  open,
  onClose,
  handleWithdraw,
}: WithdrawModalProps) => {
  const { control, register, handleSubmit } = useForm<AccountHistory>({
    defaultValues: {
      date: '',
      amount: 0,
      type: '출금',
      memo: '',
    },
  });

  const onSubmit: SubmitHandler<AccountHistory> = (data: AccountHistory) => {
    console.log(data);
    onClose();
    handleWithdraw(data);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>출금</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField type='date' label='날짜' {...register('date')} />
            <TextField
              type='number'
              label='금액'
              {...register('amount', { valueAsNumber: true })}
            />
            <TextField type='text' label='메모' {...register('memo')} />
            <Button type='submit'>입금</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
