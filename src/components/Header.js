import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
  <Navbar
    bg="light"
    variant="light"
    className="border-bottom bg-light header"
  >
    <Navbar.Brand href="/">G Notes</Navbar.Brand>
  </Navbar>
);

export default Header;
