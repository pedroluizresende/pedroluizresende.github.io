import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { CustomCard } from '../styles/Projects';

function CardDev({ dev }) {
  return (
    <CustomCard sx={ { minWidth: 275 } }>
      <CardContent>
        <Typography sx={ { fontSize: 14 } } color="text.secondary" gutterBottom>
          {dev}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CustomCard>
  );
}

CardDev.propTypes = {
  dev: PropTypes.string.isRequired,
};

export default CardDev;
