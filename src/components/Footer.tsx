import React from 'react';
import { Typography, Box, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Box
      component='footer'
      textAlign='center'
      py={3}
      px={2}
      color={palette.grey[400]}
    >
      <Typography variant='body2'>
        <Link
          href='https://github.com/Umka-dev/Rick-and-Morty-characters'
          target='_blank'
          sx={{ ml: 1 }}
        >
          <IconButton aria-label='GitHub'>
            <GitHubIcon sx={{ fontSize: 20, color: palette.grey[400] }} />
          </IconButton>
        </Link>
        © {new Date().getFullYear()} Rick and Morty Characters React App | made
        by Umka-dev with💙
      </Typography>
    </Box>
  );
};

export default Footer;
