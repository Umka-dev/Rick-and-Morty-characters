import React from 'react';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Cards, ErrorDisplay, LoadingDisplay } from '.';

import { useCharactersContext } from '../context/CharactersContext';

const CardContainer: React.FC = () => {
  const {
    error,
    totalCount,
    hasNextPage,
    handleNextPage,
    isValidating,
    filteredCharacters,
  } = useCharactersContext();

  const { palette } = useTheme();

  if (error) return <ErrorDisplay />;
  if (!filteredCharacters) return <LoadingDisplay />;

  return (
    <Box textAlign='center'>
      <Cards />
      {!!filteredCharacters.length && (
        <Typography variant='subtitle2' m={6}>
          Characters shown {filteredCharacters.length} from {totalCount}
        </Typography>
      )}

      {hasNextPage && !!filteredCharacters.length && (
        <Button
          variant='outlined'
          sx={{
            color: palette.common.white,
            borderColor: palette.common.white,
            marginBottom: '100px',
            ':hover': { color: palette.primary.main },
          }}
          onClick={handleNextPage}
          disabled={isValidating} // Disable button while loading
        >
          {isValidating ? (
            <CircularProgress
              size={24}
              value={20}
              thickness={4}
              sx={{
                color: palette.common.white,
                px: '40px',
                ':hover': { color: palette.primary.main },
              }}
            />
          ) : (
            'Load more'
          )}
        </Button>
      )}
    </Box>
  );
};

export default CardContainer;
