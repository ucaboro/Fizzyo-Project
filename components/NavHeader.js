import React, { Component } from 'react';
import {Header, Navbar, NavItem, Nav } from 'react-bootstrap';
import logo from './fizzyo_logo.svg';

const NavHeader = () => (

  <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

        <Nav pullRight>
          <NavItem eventKey={1} href="#">Settings</NavItem>
          <NavItem eventKey={2} href="#">Logout</NavItem>
        </Nav>
      </Navbar.Collapse>
  </Navbar>

)


export default NavHeader;
