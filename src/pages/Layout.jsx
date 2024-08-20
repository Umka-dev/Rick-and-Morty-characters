import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  const { palette } = useTheme();
  return (
    <Container
      maxWidth='xl'
      sx={{
        color: palette.common.white,
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
