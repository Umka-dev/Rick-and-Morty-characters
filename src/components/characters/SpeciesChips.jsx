import React, { useState } from 'react';
import { Box, Stack, Chip } from '@mui/material';
import { commonStyles } from '../../constants';

const SpeciesChips = ({ speciesList }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(['All Species']);

  const handleChipClick = (species) => {
    if (species === 'All Species') {
      setSelectedSpecies(['All Species']);
    } else {
      setSelectedSpecies((prevSelected) => {
        const isSelected = prevSelected.includes(species);
        // Remove 'All Species' if other species are selected
        const newSelection = prevSelected.filter((s) => s !== 'All Species');
        return isSelected
          ? newSelection.filter((s) => s !== species)
          : [...newSelection, species];
      });
    }
    console.info(`You clicked the Chip: ${species}`);
  };

  const isActive = (species) => selectedSpecies.includes(species);

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='center'
      alignItems='center'
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
        <Chip
          label='All Species'
          variant={isActive('All Species') ? 'filled' : 'outlined'}
          color={isActive('All Species') ? 'primary' : 'default'}
          sx={{ color: commonStyles.primaryTextColor }}
          clickable
          onClick={() => handleChipClick('All Species')}
        />
        {speciesList.map((species) => (
          <Chip
            key={species}
            label={species}
            variant={isActive(species) ? 'filled' : 'outlined'}
            color={isActive(species) ? 'primary' : 'default'}
            sx={{ color: commonStyles.primaryTextColor }}
            clickable
            onClick={() => handleChipClick(species)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SpeciesChips;
