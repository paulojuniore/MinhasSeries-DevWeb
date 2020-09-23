import React, { useState } from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const NewGenre = () => {
  const history = useHistory();
  const [genero, setGenero] = useState('');

  async function handleSubmit() {
    await api.post('/generos', {
      genero
    });
    history.push('/generos');
    setGenero('');
  }

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo gênero</h3>
      <Form>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do gênero</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nome do gênero"
            value={ genero }
            onChange={ event => setGenero(event.target.value) }
          />
        </FormGroup>
      </Form>
      <Button 
        type="submit" 
        className="btn btn-primary"
        onClick={ handleSubmit }>
        Cadastrar
      </Button>
    </div>
  )
}

export default NewGenre;