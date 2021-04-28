import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState({});

  firebase.auth().onAuthStateChanged((userObject) => setUser(userObject));
  console.warn(user);
  return (
    <>
      <Router>
        <NavBar setUser={setUser} user={user}/>
        {user ? <h1>I am here as a man who uses</h1> : <h1>User is not here, try coming some again</h1>}
        <Routes />
      </Router>
    </>
  );
}

export default App;
