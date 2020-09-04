import React from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo-myseries.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg='light' variant='blue'>
      <div className='container'>
        <Navbar.Brand href='/' className='main-title'>
          <img src={Logo} alt="" width="290" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/generos' style={{ marginLeft: 30 }}>Gêneros</Link>
            <Link to='/series' style={{ marginLeft: 30 }}>Séries</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;