import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NoPage: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Box
      maxWidth='xl'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      sx={{
        my: {
          xs: '140px',
          md: '160px',
          lg: '180px',
          xl: '200px',
        },
      }}
    >
      <Box
        id='page_404'
        sx={{
          position: 'relative',
          color: palette.common.white,
          fontWeight: 900,
          fontSize: {
            xs: '12em',
            sm: '14em',
            md: '16em',
            lg: '18em',
            xl: '20em',
          },
          display: 'block',
          overflow: 'hidden',
          width: 'fit-content',
          height: 'max-content',
          '&:first-letter': {
            letterSpacing: { xs: '8vmax', sm: '10vmax', md: '12vmax' },
          },
          '&:before': {
            content: '""',
            backgroundImage:
              'url("https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png")',
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          },
        }}
      >
        44
      </Box>
      <Typography variant='body1'>
        The page you are trying to search has been moved to another universe
      </Typography>
    </Box>
  );
};

export default NoPage;
