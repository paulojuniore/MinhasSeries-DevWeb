import React from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl
} from 'react-bootstrap';

import Logo from '../../assets/logo-myseries.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg='light' variant='blue'>
      <div className='container'>
        <Navbar.Brand href='/' className='main-title'>
          <img src={Logo} alt="" width="290" height="60"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/generos'>Gêneros</Nav.Link>
            <Nav.Link href='/series'>Séries</Nav.Link>
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