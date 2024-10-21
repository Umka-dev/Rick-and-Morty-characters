import React from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GenderRadioButtons, StatusRadioButtons, FilterNameField } from '.';
import { ICharacterFilter } from '../../types/types';

import { useCharactersContext } from '../../context/CharactersContext';
import { FILTER_NAMES } from '../../constants';

const FilterContent: React.FC = () => {
  const { handleResetFilters, handleApplyFilters, searchParams } =
    useCharactersContext();

  const { palette } = useTheme();

  const { handleSubmit, reset, control } = useForm<ICharacterFilter>({
    values: {
      [FILTER_NAMES.name]: searchParams.get(FILTER_NAMES.name) || undefined,
      [FILTER_NAMES.gender]: searchParams.get(FILTER_NAMES.gender) || undefined,
      [FILTER_NAMES.status]: searchParams.get(FILTER_NAMES.status) || undefined,
    },
  });

  const onSubmit = (data: ICharacterFilter) => {
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
