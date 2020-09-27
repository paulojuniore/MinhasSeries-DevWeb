import React, { useState, useEffect } from 'react';
import { 
  Form, 
  FormGroup, 
  Button
} from 'react-bootstrap';

import api from '../../services/api';

const NewSerie = () => {
  const [generos, setGeneros] = useState([]);
  const [serie, setSerie] = useState('');
  const [genero, setGenero] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [ehFilme, setEhFilme] = useState(false);
  const [ehFavorito, setEhFavorito] = useState(false);

  useEffect(() => {
    api.get('/generos')
      .then(response => setGeneros(response.data))
  });

  function handleChangeGenreType(e) {
    setGenero(e.target.value);
  }

  function handleChangeClassificationType(e) {
    setClassificacao(e.target.value);
  }

  function handleChangeIsMovie(e) {
    setEhFilme(e.target.checked);
  }

  function handleChangeIsFavorite(e) {
    setEhFavorito(e.target.checked);
  }

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo(a) filme/série</h3>
      <Form>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do(a) série/filme:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nome do(a) série/filme"
            value={ serie }
            onChange={ (e) => setSerie(e.target.value) } />

          <Form.Label style={{marginTop: 35}}>Selecione o gênero:</Form.Label>
          <Form.Control 
            as="select" 
            custom 
            style={{width: 600, marginLeft: 30}} 
            onChange={ handleChangeGenreType }
          >
            { generos.map(genero => <option>{ genero.genero }</option>) }
          </Form.Control>

          <Form.Label style={{marginTop: 35}}>Selecione a classificação indicativa:</Form.Label>
          <Form.Control 
            as="select" custom 
            style={{width: 600, marginLeft: 30}} 
            onChange={ handleChangeClassificationType }>
            <option>L (Livre)</option>
            <option>+10</option>
            <option>+12</option>
            <option>+14</option>
            <option>+16</option>
            <option>+18</option>
          </Form.Control>

          <div class="form-check" style={{ marginTop: 20 }}>
            <Form.Label 
              class="form-check-label" 
              for="exampleCheck1">É um filme?</Form.Label>
            <input 
              type="checkbox" 
              class="form-check-input" 
              id="exampleCheck1"
              style={{ marginLeft: 15, width: 20, height: 20 }}
              onChange={ handleChangeIsMovie } />
          </div>

          <div className="form-check" style={{ marginTop: 20 }}>
            <Form.Label class="form-check-label" for="exampleCheck1">É um de seus favoritos(as)?</Form.Label>
            <input 
              type="checkbox" 
              class="form-check-input" 
              id="exampleCheck1"
              style={{ marginLeft: 15, width: 20, height: 20 }}
              onChange={ handleChangeIsFavorite } />
          </div>
        </FormGroup>
      </Form>
      <Button 
        type="submit" 
        className="btn btn-primary"
        style={{ marginTop: 15 }}>Cadastrar</Button>
    </div>
  )
}

export default NewSerie;