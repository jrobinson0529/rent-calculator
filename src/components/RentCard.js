import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Button, CardTitle, CardText
} from 'reactstrap';
import moment from 'moment';

function RentCard({ name, rent }) {
  return (
    <>
      <Card body outline color="white" className='rent-card bg-dark'>
        <CardTitle tag="h5" className='text-center'>{name}&#39;s Rent</CardTitle>
        <CardText>RENT OWED { name === 'Eric' && 'TO ERIC'} FOR {moment().format('MMM')}: {rent}</CardText>
        <Button>Details</Button>
      </Card>
    </>
  );
}
RentCard.propTypes = {
  rent: PropTypes.number,
  name: PropTypes.string,
};

export default RentCard;
