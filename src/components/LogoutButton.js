import React from 'react';
import firebase from 'firebase/app';
import { Button } from 'reactstrap';
import 'firebase/auth';

const signOut = () => {
  firebase.auth().signOut();
};
function LogoutButton() {
  return (
    <Button color='danger' className='nav-btn' onClick={signOut}>Sign Out</Button>
  );
}

export default LogoutButton;
