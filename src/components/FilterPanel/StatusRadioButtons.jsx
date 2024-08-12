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

import { FILTER_NAMES, STATUS_OPTIONS } from '../../constants';
import { capitalFirst } from '../../utils';

const StatusRadioButtons = ({ control }) => {
  const { palette } = useTheme();

  return (
    <FormControl>
      <FormLabel sx={{ color: palette.grey[400] }}>
        {capitalFirst(FILTER_NAMES.status)}
      </FormLabel>
      <Controller
        name={FILTER_NAMES.status}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup row value={value} onChange={onChange}>
            {STATUS_OPTIONS.map((option) => (
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
export default StatusRadioButtons;
