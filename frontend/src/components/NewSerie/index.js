import React from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';

const NewSerie = () => {
  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo(a) filme/série</h3>
      <Form>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do(a) série/filme:</Form.Label>
          <Form.Control type="text" placeholder="Nome do(a) série/filme" />

          <Form.Label style={{marginTop: 30}}>Selecione o gênero:</Form.Label>
          <Form.Control as="select" custom style={{width: 600, marginLeft: 30}}>
            <option>Ação</option>
            <option>Comédia</option>
            <option>Terror</option>
          </Form.Control>
        </FormGroup>
      </Form>
      <Button type="submit" className="btn btn-primary">Cadastrar</Button>
    </div>
  )
}

export default NewSerie;