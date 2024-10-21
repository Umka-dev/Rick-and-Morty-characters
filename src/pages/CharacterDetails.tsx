import React from 'react';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { Avatar, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorDisplay, LoadingDisplay } from '../components';
import CustomTypography from '../components/CustomTypography';
import { ICharacter } from '../types/types';

import { fetcher } from '../utils';
import { CHARACTER_API_URL } from '../constants';

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const { data: character, error } = useSWR<ICharacter>(
    `${CHARACTER_API_URL}${id}`,
    fetcher,
  );
  const { palette } = useTheme();

  if (error) return <ErrorDisplay />;
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
      mt={5}
    >
      <CustomTypography>{character.name}</CustomTypography>
      <Avatar
        src={character.image}
        alt={character.name}
        sx={{
          width: '20%',
          minWidth: '240px',
          height: 'auto',
          margin: { xs: '10px', sm: '20px' },
        }}
      />
      <List>
        {characterAttributes.map(({ label, value }) => (
          <ListItem key={label}>
            <ListItemText
              primary={label}
              secondary={value}
              secondaryTypographyProps={{
                color: palette.grey[400],
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CharacterDetails;
