import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Controller } from 'react-hook-form';

import { FILTER_NAMES, GENDER_OPTIONS } from '../../constants';
import { capitalFirst } from '../../utils';

const GenderRadioButtons = ({ control }) => {
  const { palette } = useTheme();

  return (
    <FormControl>
      <FormLabel sx={{ color: palette.grey[400] }}>
        {capitalFirst(FILTER_NAMES.gender)}
      </FormLabel>
      <Controller
        name={FILTER_NAMES.gender}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup row value={value} onChange={onChange}>
            {GENDER_OPTIONS.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio sx={{ color: palette.grey[400] }} />}
                label={capitalFirst(option)}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
export default GenderRadioButtons;
