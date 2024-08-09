import React from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller } from 'react-hook-form';
import { FILTER_NAMES } from '../constants';

import { useCharactersContext } from '../context/CharactersContext';

const SearchBar = () => {
  const { handleSearchNavigate } = useCharactersContext();

  const { handleSubmit, control } = useForm();

  const { palette } = useTheme();

  const onSubmit = (data) => {
    handleSearchNavigate(data[FILTER_NAMES.name]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction='row' spacing={2} alignItems='flex-end'>
        <Controller
          name={FILTER_NAMES.name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label='Input name'
              variant='standard'
              size='small'
              value={value || ''}
              onChange={onChange}
              InputProps={{
                sx: {
                  '&:before': {
                    borderBottomColor: palette.common.white,
                  },
                  '&:after': {
                    borderBottomColor: palette.primary.main,
                  },
                  input: {
                    color: palette.common.white,
                  },
                },
              }}
              InputLabelProps={{
                sx: {
                  color: palette.common.white,
                },
              }}
            />
          )}
        />
        <Button
          variant='outlined'
          sx={{
            color: palette.common.white,
            borderColor: palette.common.white,
            ':hover': { color: palette.primary.main },
          }}
          type='submit'
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;
