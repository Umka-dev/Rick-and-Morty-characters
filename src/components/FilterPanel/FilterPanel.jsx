import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import useMediaQuery from '@mui/material/useMediaQuery';

import { FilterModal, FilterContent } from './';

const FilterPanel = () => {
  const [isFilterDialogOpen, setIsFilterDialogOpen] = React.useState(false);

  const { palette, breakpoints } = useTheme();

  const isSmallerThanMd = useMediaQuery(breakpoints.down('md'));

  const handleOpenFilterDialog = () => {
    setIsFilterDialogOpen(true);
  };

  const handleCloseFilterDialog = () => {
    setIsFilterDialogOpen(false);
  };

  return (
    <>
      {/* Display filter button for small screens */}
      {isSmallerThanMd && (
        <Box display='block' mt={11} mb={3} textAlign='center'>
          <Button
            variant='outlined'
            startIcon={<FilterListIcon />}
            onClick={handleOpenFilterDialog}
            sx={{
              color: palette.common.white,
              borderColor: palette.common.white,
              ':hover': { color: palette.primary.main },
            }}
          >
            Filters
          </Button>
        </Box>
      )}

      {/* Display filter panel for larger screens */}
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        mt={14}
        display={{ xs: 'none', sm: 'none', md: 'flex' }}
      >
        <Box
          position='fixed'
          display='flex'
          width='100%'
          justifyContent='center'
          zIndex={1}
          sx={{
            padding: '16px',
            paddingTop: {
              xs: '220px',
              sm: '100px',
              lg: '60px',
              xl: '20px',
            },
            color: palette.common.white,
            backgroundColor: palette.grey[900],
          }}
        >
          <FilterContent />
        </Box>
      </Stack>

      {/* Modal dialog for filters on small screens */}
      {isSmallerThanMd && (
        <FilterModal
          isOpen={isFilterDialogOpen}
          handleClose={handleCloseFilterDialog}
        >
          <FilterContent />
        </FilterModal>
      )}
    </>
  );
};

export default FilterPanel;
