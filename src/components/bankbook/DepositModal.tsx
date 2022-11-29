import React, { useEffect, useState } from 'react';
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
import { useAccountHistory } from '../../common/api/useAccountHistory';

const defaultHistory: AccountHistory = {
  date: '',
  amount: 0,
  type: '입금',
  memo: '',
  tags: [],
};

const ButtonStyle = styled(Button)({
  minWidth: '100px',
  fontWeight: 'bold',
});

const TagsItemStyle = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyleType: 'none',
}));

const ContentStyle = styled('div')({});

interface DepositModalProps {
  id: number;
}

const DepositModal = ({ id }: DepositModalProps) => {
  const [openDeposit, setOpenDeposit] = useState<boolean>(false);

  const { mutate } = useAccountHistory(id).create;

  const { control, register, handleSubmit, reset } = useForm<AccountHistory>({
    defaultValues: defaultHistory,
  });

  const onSubmit: SubmitHandler<AccountHistory> = (data: AccountHistory) => {
    console.log(data);
    mutate(data);
    handleDepositModalClose();
  };

  const { fields, append, remove } = useFieldArray({ name: 'tags', control });

  const [defaultTags, setDefaultTags] = useState<DefaultTag[]>(defaultTag);

  const handleDepositModalOpen = () => {
    setOpenDeposit(true);
  };

  const handleDepositModalClose = () => {
    setOpenDeposit(false);
    reset(defaultHistory);
    setDefaultTags(defaultTag);
  };

  return (
    <>
      <ButtonStyle
        variant='contained'
        type='button'
        onClick={handleDepositModalOpen}
      >
        입금
      </ButtonStyle>
      <Dialog
        maxWidth='sm'
        fullWidth
        open={openDeposit}
        onClose={handleDepositModalClose}
      >
        <DialogTitle>입금</DialogTitle>
        <DialogContent>
          <ContentStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextField
                  type='date'
                  label='날짜'
                  InputLabelProps={{ shrink: true }}
                  margin='normal'
                  {...register('date')}
                />
                <TextField
                  type='number'
                  label='금액'
                  margin='normal'
                  {...register('amount', { valueAsNumber: true })}
                />
                <TextField
                  type='text'
                  label='메모'
                  margin='normal'
                  multiline
                  rows={4}
                  {...register('memo')}
                />

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
                        <TagsItemStyle key={tagIdx}>
                          <Chip
                            label={tag.title}
                            color='success'
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
                        </TagsItemStyle>
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
                            <TagsItemStyle>
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
                            </TagsItemStyle>
                          )}
                        </>
                      );
                    })}
                    <TagsItemStyle>
                      <Chip label={'직접입력'} />
                    </TagsItemStyle>
                  </div>
                </div>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ marginTop: '16px' }}
                >
                  입금
                </Button>
              </div>
            </form>
          </ContentStyle>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DepositModal;
