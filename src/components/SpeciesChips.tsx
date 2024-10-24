import React from 'react';
import { Box, Stack, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useCharactersContext } from '../context/CharactersContext';

const SpeciesChips: React.FC = () => {
  const { speciesList, selectedSpecies, handleChipClick } =
    useCharactersContext();

  const { palette } = useTheme();

  const isSelected = React.useCallback(
    (speciesName: string, idx: number) => {
      if (idx === 0 && !selectedSpecies.length) {
        return true;
      }
      return selectedSpecies.includes(speciesName);
    },
    [selectedSpecies],
  );

  return (
    <Box
      display='flex'
      width='90%'
      justifyContent='center'
      p={2}
      sx={{
        my: {
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '20px',
        },
      }}
    >
      <Stack
        direction='row'
        flexWrap='wrap'
        spacing={{ xs: 1, sm: 2 }}
        sx={{ rowGap: 2 }}
      >
        {speciesList.map((speciesName, idx) => (
          <Chip
            key={speciesName}
            label={speciesName}
            variant={isSelected(speciesName, idx) ? 'filled' : 'outlined'}
            color={isSelected(speciesName, idx) ? 'primary' : 'default'}
            sx={{ color: palette.common.white }}
            onClick={() => handleChipClick(speciesName)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
