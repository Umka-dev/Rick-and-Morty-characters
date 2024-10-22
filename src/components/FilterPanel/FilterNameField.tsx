import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Controller } from 'react-hook-form';
import { CharacterFilterControl } from '../../types';
import { FILTER_NAMES } from '../../constants';

const FilterNameField: React.FC<{ control: CharacterFilterControl }> = ({
  control,
}) => {
  const { palette } = useTheme();

  return (
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
          sx={{ minWidth: '150px' }}
        />
      )}
    />
  );
};

export default FilterNameField;
