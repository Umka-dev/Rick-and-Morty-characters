import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingDisplay: React.FC = () => {
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
      <CircularProgress size={50} value={20} thickness={4} />
    </Box>
  );
};

export default LoadingDisplay;
