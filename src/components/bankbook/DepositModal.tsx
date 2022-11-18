import React, { useState } from 'react';
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
  TextField,
} from '@mui/material';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { AccountHistory, DefaultTag } from '../../common/interfaces/Bankbook';
import { defaultTag } from '../../utils/bankbookdata';

const TagsItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyleType: 'none',
}));

interface DepositModalProps {
  open: boolean;
  onClose: () => void;
  handleDeposit?: (deposit: AccountHistory) => void;
}

const DepositModal = ({ open, onClose, handleDeposit }: DepositModalProps) => {
  const { control, register, handleSubmit } = useForm<AccountHistory>({
    defaultValues: {
      date: '',
      amount: 0,
      type: '입금',
      memo: '',
      tags: [],
    },
  });

  const onSubmit: SubmitHandler<AccountHistory> = (data: AccountHistory) => {
    console.log(data);
    onClose();
    // handleDeposit(data);
  };

  const { fields, append, remove } = useFieldArray({ name: 'tags', control });

  const [defaultTags, setDefaultTags] = useState<DefaultTag[]>(defaultTag);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>입금</DialogTitle>
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

            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {fields.map((tag, tagIdx) => {
                  return (
                    <TagsItem key={tagIdx}>
                      <Chip
                        label={tag.title}
                        onClick={() => {
                          setDefaultTags(
                            defaultTags.map((it) => {
                              return it.title === tag.title
                                ? { ...it, isDisplay: true }
                                : it;
                            }),
                          );

                          remove(tagIdx);
                        }}
                      />
                    </TagsItem>
                  );
                })}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {defaultTags.map((tag, tagIdx) => {
                  return (
                    <>
                      {tag.isDisplay && (
                        <TagsItem>
                          <Chip
                            label={tag.title}
                            onClick={() => {
                              setDefaultTags(
                                defaultTags.map((it) =>
                                  it.id === tagIdx
                                    ? { ...it, isDisplay: false }
                                    : it,
                                ),
                              );
                              append({
                                id: fields.length,
                                title: tag.title,
                              });
                            }}
                          />
                        </TagsItem>
                      )}
                    </>
                  );
                })}
                <TagsItem>
                  <Chip label={'직접입력'} />
                </TagsItem>
              </div>
            </div>
            <Button type='submit'>입금</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
