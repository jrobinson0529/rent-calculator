import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import FormView from '../views/FormView';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Routes({ user }) {
  return (
    <>
      <Switch>
        { user ? <Route exact path="/" component={FormView}/> : ''}
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </>
  );
}
Routes.propTypes = {
  user: PropTypes.object
};
export default Routes;
