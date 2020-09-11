import React from 'react';
import { 
  Form, 
  FormGroup, 
  Button 
} from 'react-bootstrap';

const NewGenre = () => {
  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo gênero</h3>
      <Form>
        <FormGroup controlId="formBasic">
          <Form.Label style={{ marginTop: 15 }}>Nome do gênero</Form.Label>
          <Form.Control type="text" placeholder="Nome do gênero" />
        </FormGroup>
      </Form>
      <Button type="submit" className="btn btn-primary">Cadastrar</Button>
    </div>
  )
}

export default NewGenre;