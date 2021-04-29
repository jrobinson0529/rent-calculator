import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RentForm from '../components/RentForm';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={RentForm}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </>
  );
}

export default Routes;
