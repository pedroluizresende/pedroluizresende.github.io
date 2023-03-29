import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function CardDev({ dev }) {
  return (
    <Card sx={ { minWidth: 275 } }>
      <CardContent>
        <Typography sx={ { fontSize: 14 } } color="text.secondary" gutterBottom>
          {dev}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardDev.propTypes = {
  dev: PropTypes.string.isRequired,
};

export default CardDev;
