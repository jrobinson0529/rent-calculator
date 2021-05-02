import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Routes({ user, rentJesse, rentAndy }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} rentJesse={rentJesse} rentAndy={rentAndy}/>}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </>
  );
}
Routes.propTypes = {
  user: PropTypes.object,
  rentJesse: PropTypes.number,
  rentAndy: PropTypes.number,
};
export default Routes;
