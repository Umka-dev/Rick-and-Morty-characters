import React from 'react';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { SearchBar } from './characters';

import { useCharactersContext } from '../context/CharactersContext';
import { commonStyles } from '../constants';

const Header = () => {
  const { handleResetFilters } = useCharactersContext();

  const location = useLocation();

  const handleHomeClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleResetFilters();
  }, []);

  const isSearchResultsPage = /^\/search/.test(location.pathname);

  return (
    <AppBar
      component='header'
      position='fixed'
      sx={{
        boxShadow: 'none',
        alignItems: 'center',
        p: '10px',
        backgroundColor: commonStyles.backgroundColor,
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
            color={commonStyles.primaryTextColor}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: commonStyles.linkColor,
              },
              '&:active': {
                color: commonStyles.primaryTextColor,
              },
            }}
          >
            Home
          </Typography>
          {!isSearchResultsPage && (
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2 }}
            >
              <SearchBar />
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
