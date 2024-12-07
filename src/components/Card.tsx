import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Card as MuiCard,
  CardContent,
  Typography,
} from '@mui/material';
import { ICharacter } from '../types';

export type IProps = Pick<ICharacter, 'id' | 'name' | 'image'>;

const Card: React.FC<IProps> = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleCardClick = React.useCallback(() => {
    navigate(`/character/${id}`);
  }, [id, navigate]);

  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        borderRadius: '20px',
        ':hover': {
          opacity: '80%',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia component='img' height='240' src={image} alt={name} />
      <CardContent>
        <Typography variant='h5'>{name}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
