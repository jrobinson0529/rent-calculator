import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import moment from 'moment';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getCurrentMonthBill } from '../helpers/data/rentData';

function App() {
  const [user, setUser] = useState(null);
  const [rentAndy, setRentAndy] = useState(0);
  const [rentJesse, setRentJesse] = useState(0);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          fullName: authed.displayName,
          username: authed.email.split('@gmail.com')[0],
          uid: authed.uid
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  useEffect(() => {
    getCurrentMonthBill(moment().format('MM-YYYY')).then((response) => {
      setRentAndy(((response.electric + response.internet + response.water) / 4) + response.baseRent);
      setRentJesse(((response.electric + response.internet + response.water) / 4) + response.baseRent - response.electric);
    });
  }, []);
  console.warn(rentAndy);
  console.warn(rentJesse);
  return (
    <>
      <Router>
        <NavBar setUser={setUser} user={user}/>
        <Routes user={user}/>
      </Router>
    </>
  );
}

export default App;
