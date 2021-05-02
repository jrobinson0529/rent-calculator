import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RentCard from '../components/RentCard';

function Home({ user, rentJesse, rentAndy }) {
  const rentEric = rentJesse + rentAndy;
  return (
    <>
      <header>
        { user ? <h1 className='header-title'>Welcome home {user.fullName.split(' ')[0]}!</h1>
          : <h1 className='header-title'>Welcome to RentBoi3000!</h1>}
          {!user && <h3 color='light' className='text-center my-3'>Log in to access the site!</h3>}
      </header>
      {
        user && <div className='card-container'>
                    <RentCard rent={rentJesse} name={'Jesse'}/>
                    <RentCard rent={rentAndy} name={'Andy'}/>
                    <RentCard rent={rentEric} name={'Eric'}/>
                </div>}
        { user
        && <div className='rent-form-button-container'>
            <Link to='/rent-form' className='rent-form-button-link'><Button color='info' className='rent-form-button'>Calculate Rent!</Button></Link>
          </div>
        }
    </>
  );
}
Home.propTypes = {
  user: PropTypes.object,
  rentJesse: PropTypes.number,
  rentAndy: PropTypes.number,
};
export default Home;
