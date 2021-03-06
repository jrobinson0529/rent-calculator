import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/about/">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/users/">Users</Link>
            </NavItem>
          </Nav>
          {user !== null
          && <div>
            {
              user ? <LogoutButton/> : <LoginButton/>
            }
          </div>
          }
        </Collapse>
      </Navbar>
    </>
  );
};
NavBar.propTypes = {
  user: PropTypes.object,
};

export default NavBar;
