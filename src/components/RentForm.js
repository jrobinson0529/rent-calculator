// import moment from 'moment';
import moment from 'moment';
import React, { useState } from 'react';
import {
  Form, FormGroup, Input, Button, Label
} from 'reactstrap';
import { getBills, postBills } from '../helpers/data/rentData';

function RentForm() {
  const [bills, setBills] = useState({
    water: 0,
    electric: 0,
    internet: 0,
    baseRent: 567,
    date: moment().format('MM-YYYY'),
  });
  const [string, setString] = useState('');
  const handleInputChange = (e) => {
    setBills((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name !== 'date' ? Number(e.target.value) : e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getBills().then((response) => {
      const arr = [...response];
      const dateHere = arr.filter((object) => object.date.includes(moment().format('MM-YYYY')));
      if (dateHere.length === 0) {
        setString('');
        postBills(bills);
      } else {
        setString('Date already exists');
      }
    });
    // setRentAndy((bills.water + bills.internet + bills.electric / 4) + bills.baseRent);
  };
  return (
    <div>
      <Form
        id='rentForm'
        onSubmit={handleSubmit}
        className='rent-form'
      >
        <FormGroup>
          <Label for='water'>Water</Label>
          <Input
            type='number'
            name='water'
            id='water'
            onChange={handleInputChange}
            value={bills.water}/>
        </FormGroup>
        <FormGroup>
        <Label for='electric'>Electric</Label>
          <Input
            type='number'
            name='electric'
            id='electric'
            onChange={handleInputChange}
            value={bills.electric}/>
        </FormGroup>
        <FormGroup>
        <Label for='internet'>Internet</Label>
          <Input
            type='number'
            name='internet'
            id='internet'
            onChange={handleInputChange}
            value={bills.internet}/>
        </FormGroup>
        <Button type='submit' color='info'>SUBMIT</Button>
      </Form>
      <h1>{string}</h1>
    </div>
  );
}

export default RentForm;
