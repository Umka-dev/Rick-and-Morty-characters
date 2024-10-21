import React from 'react';
import { Box, Typography } from '@mui/material';

import { useCharactersContext } from '../context/CharactersContext';

const ErrorDisplay: React.FC = () => {
  const { error } = useCharactersContext();
  return (
    <Box
      maxWidth='xl'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        my: {
          xs: '100px',
          sm: '150px',
          md: '200px',
          lg: '250px',
          xl: '270px',
        },
      }}
    >
      <Typography variant='body1'>Error: {error.message}</Typography>
    </Box>
  );
};

export default ErrorDisplay;
