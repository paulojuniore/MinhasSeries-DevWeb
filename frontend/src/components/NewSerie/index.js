import React, { useState, useEffect } from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';

import api from '../../services/api';

const NewSerie = () => {
  const [generos, setGeneros] = useState([])

  useEffect(() => {
    api.get('/generos')
      .then(response => setGeneros(response.data))
  })

  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo(a) filme/série</h3>
      <Form>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do(a) série/filme:</Form.Label>
          <Form.Control type="text" placeholder="Nome do(a) série/filme" />

          <Form.Label style={{marginTop: 35}}>Selecione o gênero:</Form.Label>
          <Form.Control as="select" custom style={{width: 600, marginLeft: 30}}>
            { generos.map(genero => <option>{ genero.genero }</option>) }
          </Form.Control>

          <Form.Label style={{marginTop: 35}}>Selecione a classificação indicativa:</Form.Label>
          <Form.Control as="select" custom style={{width: 600, marginLeft: 30}}>
            <option>L (Livre)</option>
            <option>+10</option>
            <option>+12</option>
            <option>+14</option>
            <option>+16</option>
            <option>+18</option>
          </Form.Control>
        </FormGroup>
      </Form>
      <Button type="submit" className="btn btn-primary">Cadastrar</Button>
    </div>
  )
}

export default NewSerie;