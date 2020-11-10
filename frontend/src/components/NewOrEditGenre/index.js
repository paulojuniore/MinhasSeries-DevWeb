import React, { useState, useEffect } from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

const NewGenre = (props) => {
  const history = useHistory();
  const [genero, setGenero] = useState('');
  const [lastGenreName, setLastGenreName] = useState('');

  const { id_genero } = useParams();

  function handleSubmit(event) {
    event.preventDefault();
    if (props.operation === 'create') {
      api.post('/generos', {
        genero
      })
        .then(response => console.log(response));
      history.push('/generos');
      setGenero('');
    } 
    else if (props.operation === 'edit') {
      api.put(`/generos/${id_genero}`, {
        genero
      });
      alert('Gênero editado com sucesso!');
      history.push('/generos');
    }
  }

  useEffect(() => {
    api.get(`/generos/${id_genero}`)
      .then(response => {
        setLastGenreName(response.data.genero)
      });
  }, [id_genero]);

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>{ props.title }</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do gênero</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder={ lastGenreName === '' ? props.placeholder : lastGenreName }
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