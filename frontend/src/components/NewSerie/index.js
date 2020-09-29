import React, { useState, useEffect } from 'react';
import { 
  Form, 
  FormGroup, 
  Button
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const NewSerie = () => {
  const history = useHistory();
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

  function findGenreId() {
    let id_genero = 0;
    for (let index = 0; index < generos.length; index++) {
      if (genero === generos[index].genero) {
        id_genero = generos[index].id
      }
    }
    return id_genero;
  }

  async function handleSubmit() {
    const id_genero = findGenreId();
    await api.post('/series', {
      nome: serie,
      eh_filme: ehFilme,
      id_genero,
      classificacao,
      eh_favorita: ehFavorito
    });

    history.push('/series');
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
            { generos.map((genero,index) => <option key={ index }>{ genero.genero }</option>) }
          </Form.Control>

          <Form.Label style={{marginTop: 35}}>Selecione a classificação indicativa:</Form.Label>
          <Form.Control 
            as="select" custom 
            style={{width: 600, marginLeft: 30}} 
            onChange={ handleChangeClassificationType }>
            <option key="0">L (Livre)</option>
            <option key="1">+10</option>
            <option key="2">+12</option>
            <option key="3">+14</option>
            <option key="4">+16</option>
            <option key="5">+18</option>
          </Form.Control>

          <div className="form-check" style={{ marginTop: 20 }}>
            <Form.Label className="form-check-label" >É um filme?</Form.Label>
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck1"
              style={{ marginLeft: 15, width: 20, height: 20 }}
              onChange={ handleChangeIsMovie } />
          </div>

          <div className="form-check" style={{ marginTop: 20 }}>
            <Form.Label className="form-check-label">É um de seus favoritos(as)?</Form.Label>
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck1"
              style={{ marginLeft: 15, width: 20, height: 20 }}
              onChange={ handleChangeIsFavorite } />
          </div>
        </FormGroup>
      </Form>
      <Button 
        type="submit" 
        className="btn btn-primary"
        style={{ marginTop: 15 }}
        onClick={ handleSubmit }>Cadastrar</Button>
    </div>
  )
}

export default NewSerie;