import React, { useState } from 'react';
import {
  Form, FormGroup, Input, Button
} from 'reactstrap';

function RentForm() {
  const [bills, setBills] = useState({
    water: 0,
    electric: 0,
    internet: 0,
    baseRent: 567,
  });
  const [rentAndy, setRentAndy] = useState(0);
  const handleInputChange = (e) => {
    setBills((prevState) => ({
      ...prevState,
      [e.target.name]: Number(e.target.value)
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRentAndy((bills.water + bills.internet + bills.electric / 4) + bills.baseRent);
    console.warn(rentAndy);
  };
  return (
    <div>
      <Form
        id='rentForm'
        onSubmit={handleSubmit}
        className='rent-form'
      >
        <FormGroup>
          <Input
            type='number'
            name='water'
            id='water'
            onChange={handleInputChange}
            value={bills.water}/>
        </FormGroup>
        <FormGroup>
          <Input
            type='number'
            name='electric'
            id='electric'
            onChange={handleInputChange}
            value={bills.electric}/>
        </FormGroup>
        <FormGroup>
          <Input
            type='number'
            name='internet'
            id='internet'
            onChange={handleInputChange}
            value={bills.internet}/>
        </FormGroup>
        <Button type='submit' color='info'>SUBMIT</Button>
        {rentAndy}
      </Form>
    </div>
  );
}

export default RentForm;
