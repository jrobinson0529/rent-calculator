import { Button } from 'reactstrap';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};
function LoginButton() {
  return (
    <Button color='danger' onClick={signIn}>Sign in</Button>
  );
}

export default LoginButton;
