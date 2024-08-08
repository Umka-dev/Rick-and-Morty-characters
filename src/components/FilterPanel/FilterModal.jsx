import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';

const FilterModal = ({ isOpen, handleClose, children }) => {
  const { palette, breakpoints } = useTheme();
  const isSmallerThanMd = useMediaQuery(breakpoints.down('md'));
  return (
    <>
      {isSmallerThanMd && (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          maxWidth='md'
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: palette.grey[900],
              color: palette.common.white,
            },
          }}
        >
          <DialogTitle>
            Filters
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: palette.grey[400],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default FilterModal;
