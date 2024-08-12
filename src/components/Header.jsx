import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { SearchBar } from './';

import { useCharactersContext } from '../context/CharactersContext';

const Header = () => {
  const { handleResetFilters } = useCharactersContext();

  const location = useLocation();
  const { palette } = useTheme();

  const handleHomeClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleResetFilters();
  }, []);

  const isSearchResultsPage = /^\/search/.test(location.pathname);

  return (
    <AppBar
      component='header'
      position='fixed'
      width='100%'
      sx={{
        boxShadow: 'none',
        alignItems: 'center',
        p: '10px',
        backgroundColor: palette.grey[900],
      }}
    >
      <Toolbar>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 0, sm: 6, md: 8, lg: 10, xl: 10 }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            variant='h6'
            component={RouterNavLink}
            onClick={handleHomeClick}
            to='/'
            color={palette.common.white}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: palette.primary.main,
              },
              '&:active': {
                color: palette.common.white,
              },
              marginBottom: { xs: '10px', sm: '0' },
            }}
          >
            Home
          </Typography>
          {!isSearchResultsPage && <SearchBar />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
