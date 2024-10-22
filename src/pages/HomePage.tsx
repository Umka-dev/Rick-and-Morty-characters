import React from 'react';
import { Box } from '@mui/material';
import { SpeciesChips, CardContainer } from '../components';
import CustomTypography from '../components/CustomTypography';

const HomePage: React.FC = () => {
  return (
    <Box
      textAlign='center'
      sx={{
        mt: {
          xs: '130px',
          sm: '110px',
        },
      }}
    >
      <CustomTypography>The Rick and Morty Characters</CustomTypography>
      <SpeciesChips />
      <CardContainer />
    </Box>
  );
};

export default HomePage;
