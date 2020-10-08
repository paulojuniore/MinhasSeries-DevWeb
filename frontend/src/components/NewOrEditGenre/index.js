import React, { useState } from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const NewGenre = (props) => {
  const history = useHistory();
  const [genero, setGenero] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    api.post('/generos', {
      genero
    })
      .then(response => console.log(response));
    history.push('/generos');
    setGenero('');
  }

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>{ props.title }</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do gênero</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder={ props.placeholder }
            value={ genero }
            onChange={ event => setGenero(event.target.value) }
          />
        </FormGroup>
        <Button 
          type="submit" 
          className="btn btn-primary">
          { props.title_button }
        </Button>
      </Form>
    </div>
  )
}

export default NewGenre;