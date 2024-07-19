import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ErrorDisplay from './ErrorDisplay';
import LoadingDisplay from './LoadingDisplay';

import { commonStyles, CHARACTER_API_URL } from '../../constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const CharacterDetails = () => {
  const { id } = useParams();
  const { data: character, error } = useSWR(
    `${CHARACTER_API_URL}${id}`,
    fetcher,
  );

  if (error) return <ErrorDisplay message={error.message} />;
  if (!character) return <LoadingDisplay />;

  const characterAttributes = [
    { label: 'Status:', value: character.status },
    { label: 'Species:', value: character.species },
    { label: 'Gender:', value: character.gender },
    { label: 'Origin:', value: character.origin.name },
    { label: 'Location:', value: character.location.name },
  ];

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      mt={2}
    >
      <Typography variant='h4' gutterBottom>
        {character.name}
      </Typography>
      <Avatar
        src={character.image}
        alt={character.name}
        sx={{
          width: '20%',
          minWidth: '300px',
          height: 'auto',
          margin: '20px',
        }}
      />
      <List>
        {characterAttributes.map((attribute, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={attribute.label}
              secondary={attribute.value}
              secondaryTypographyProps={{ color: commonStyles.secondTextColor }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CharacterDetails;
