import React, { useState } from 'react';
import { 
  Form, 
  FormGroup, 
  Button
} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import { useGenresAndSeries } from '../../context/GenresAndSeriesContext';
import { useEffect } from 'react';

const NewOrEditSerie = (props) => {
  const history = useHistory();
  
  const { generos } = useGenresAndSeries();

  const [serie, setSerie] = useState('');
  const [genero, setGenero] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [ehFilme, setEhFilme] = useState(false);
  const [ehFavorito, setEhFavorito] = useState(false);

  // const [lastSerie, setLastSerie] = useState({});

  const { id_serie } = useParams();

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

  function findGenreId(genero_input) {
    let id_genero = 0;
    for (let index = 0; index < generos.length; index++) {
      if (generos[index].genero === genero_input) {
        id_genero = generos[index].id
      }
    }
    return id_genero;
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (genero === '') {
        setGenero(generos[0].genero);
      }
      const id_genero = findGenreId(genero);

      api.post('/series', {
        nome: serie,
        eh_filme: ehFilme,
        id_genero,
        classificacao,
        eh_favorita: ehFavorito
      });

      history.push('/series');
    }
    catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    api.get(`/series/${id_serie}`)
      .then(response => console.log(response.data));
    
  }, [id_serie]);

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>{ props.title }</h3>
      <Form onSubmit={ handleSubmit }>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do(a) série/filme:</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Nome do(a) série/filme"
            value={ serie }
            onChange={ (e) => setSerie(e.target.value) } />

          <Form.Label style={{marginTop: 35}}>Selecione o gênero:</Form.Label>
          <Form.Control 
            required
            as="select" 
            custom 
            style={{width: 600, marginLeft: 30}} 
            onChange={ handleChangeGenreType }
          >
            { generos.map((genero,index) => <option key={ index }>{ genero.genero }</option>) }
          </Form.Control>
          <br></br>
          <Form.Label style={{marginTop: 35}}>Selecione a classificação indicativa:</Form.Label>
          <Form.Control 
            required
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
        <Button 
          type="submit" 
          className="btn btn-primary"
          style={{ marginTop: 15 }}>{ props.title_button }</Button>
      </Form>
    </div>
  )
}

export default NewOrEditSerie;