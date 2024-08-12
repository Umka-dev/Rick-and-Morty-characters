import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from './Card';

import { useCharactersContext } from '../context/CharactersContext';

const Cards = () => {
  const { filteredCharacters } = useCharactersContext();

  if (!filteredCharacters.length) {
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
        <Typography variant='h5'>Characters were not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      gap={4}
      display='grid'
      sx={{
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // 1 column on extra-small screens
          sm: 'repeat(2, 1fr)', // 2 columns on small screens
          md: 'repeat(3, 1fr)', // 3 columns on medium screens
          lg: 'repeat(4, 1fr)', // 4 columns on large screens
          xl: 'repeat(5, 1fr)', // 5 columns on extra-large screens
        },
      }}
    >
      {filteredCharacters.map(({ id, name, image }) => (
        <Card key={id} id={id} name={name} image={image} />
      ))}
    </Box>
  );
};

export default Cards;
