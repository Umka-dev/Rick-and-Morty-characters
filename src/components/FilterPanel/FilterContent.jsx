import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GenderRadioButtons, StatusRadioButtons, FilterNameField } from './';
import { FILTER_NAMES } from '../../constants';

import { useCharactersContext } from '../../context/CharactersContext';

const FilterContent = () => {
  const { handleResetFilters, handleApplyFilters, searchParams } =
    useCharactersContext();

  const { palette } = useTheme();

  const { handleSubmit, reset, control } = useForm({
    values: {
      [FILTER_NAMES.name]: searchParams.get(FILTER_NAMES.name),
      [FILTER_NAMES.gender]: searchParams.get(FILTER_NAMES.gender),
      [FILTER_NAMES.status]: searchParams.get(FILTER_NAMES.status),
    },
  });

  const onSubmit = (data) => {
    handleApplyFilters(data);
  };

  const handleReset = () => {
    reset();
    handleResetFilters();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 10 }}
        alignItems='center'
        px={2}
      >
        <FilterNameField control={control} />
        <StatusRadioButtons control={control} />
        <GenderRadioButtons control={control} />
        <Stack direction='row' spacing={2}>
          <Button
            variant='outlined'
            sx={{
              color: palette.common.white,
              borderColor: palette.common.white,
              ':hover': { color: palette.primary.main },
            }}
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Show
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default FilterContent;
