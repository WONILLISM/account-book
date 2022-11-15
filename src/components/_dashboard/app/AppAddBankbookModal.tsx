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
import { Bankbook, DefaultTag } from '../../../common/interfaces/Bankbook';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { defaultTag } from '../../../utils/bankbookdata';
import { useAccounts } from '../../../common/api/useAccounts';

const TagsItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyleType: 'none',
}));

interface AppAddBankbookModalProps {
  open: boolean;
  onClose: () => void;
}

const AppAddBankbookModal = ({ open, onClose }: AppAddBankbookModalProps) => {
  const [defaultTags, setDefaultTags] = useState<DefaultTag[]>(defaultTag);
  const { control, register, handleSubmit } = useForm<Bankbook>({
    defaultValues: {
      id: -1,
      title: '',
      balance: 0,
      tags: [],
      accountName: '',
      accountNumber: '',
      accountHistory: [],
      description: '',
    },
  });

  const { fields, append, remove } = useFieldArray({ name: 'tags', control });

  const { mutate } = useAccounts().create;

  const onSubmit: SubmitHandler<Bankbook> = (data: Bankbook) => {
    console.log(data);
    mutate(data);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>텅장 추가</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField label='통장 이름' {...register('title')} />
            <TextField label='잔액' {...register('balance')} />
            <TextField label='은행' {...register('accountName')} />
            <TextField label='계좌번호' {...register('accountNumber')} />
            <TextField label='메모' {...register('description')} multiline />
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
          </div>

          <Button type='submit'>추가</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppAddBankbookModal;
