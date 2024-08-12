import React from 'react';
import { CardContainer } from '../components';
import { FilterPanel } from '../components/FilterPanel';
import CustomTypography from '../components/CustomTypography';
import { Box } from '@mui/material';

const SearchResults = () => {
  return (
    <Box textAlign='center'>
      <FilterPanel />
      <Box sx={{ mt: { md: '140px', lg: '90px' } }}>
        <CustomTypography>Found characters</CustomTypography>
        <CardContainer />
      </Box>
    </Box>
  );
};

export default SearchResults;
