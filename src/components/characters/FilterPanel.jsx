import React from 'react';
import { Box, Stack, Button, TextField } from '@mui/material';
import { StatusRadioButtons, GenderCheckboxes } from '.';

import { commonStyles } from '../../constants';

const FilterPanel = ({
  onNameChange,
  name,
  onStatusChange,
  status,
  onGenderChange,
  gender,
  onApplyFilters,
  onResetFilters,
}) => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' mt={14}>
      <Box
        position='fixed'
        display='flex'
        width='100%'
        justifyContent='center'
        alignItems='center'
        sx={{
          padding: {
            xs: '220px 16px 16px 16px',
            sm: '100px 16px 8px 16px',
            md: '80px 8px 8px 8px',
            lg: '60px 8px 8px 8px',
            xl: '20px 8px 8px 8px',
          },
          color: commonStyles.primaryTextColor,
          backgroundColor: commonStyles.backgroundColor,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 0.5, sm: 2, md: 6, lg: 8, xl: 10 }}
          alignItems='center'
          px='16px'
          // justifyContent='center'
        >
          <TextField
            id='standard-size-small'
            label='Input name'
            variant='standard'
            size='small'
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            InputProps={{
              sx: {
                '&:before': {
                  borderBottomColor: commonStyles.borderColor,
                },
                '&:after': {
                  borderBottomColor: commonStyles.linkColor,
                },
                input: {
                  color: commonStyles.primaryTextColor,
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: commonStyles.primaryTextColor,
              },
            }}
            sx={{ minWidth: '150px' }}
          />
          <StatusRadioButtons onChange={onStatusChange} status={status} />
          <GenderCheckboxes
            onChange={onGenderChange}
            gender={gender}
            sx={{ alignItems: 'center' }}
          />
          <Stack direction='row' spacing={2} justifyContent='center'>
            <Button
              variant='outlined'
              sx={{
                color: commonStyles.primaryTextColor,
                borderColor: commonStyles.borderColor,
                ':hover': { color: commonStyles.linkColor },
              }}
              onClick={onResetFilters}
            >
              Reset
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={onApplyFilters}
            >
              Show
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FilterPanel;
