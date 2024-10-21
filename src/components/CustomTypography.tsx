import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

const CustomTypography: React.FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant='h1'
      sx={{
        fontSize: {
          xs: '2rem', // small screens
          sm: '2.5rem', // medium screens
          md: '3rem', // large screens
          lg: '3.5rem', // extra large screens
          xl: '4rem', // double extra large screens
        },
        marginBottom: {
          xs: '20px',
          md: '30px',
        },
      }}
      {...props}
    />
  );
};

export default CustomTypography;
