import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Genre = () => {
  return (
    <div className='container'>
      <h2 className='title'>
        Gêneros
      </h2>
      <Link to='generos/novoGenero' className='btn btn-primary'>
        Novo gênero
      </Link>
      <div className='input-group-mb-3'>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Pesquisar por gênero..." 
          aria-label="Recipiente para nickname" 
          aria-describedby="basic-addon2" 
        />
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Gênero</th>
            <th scope='col'>Ação</th>
          </tr>
        </thead>
        <tbody>
           <tr>
             <td>Ação</td>
             <td>Editar/Remover</td>
           </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Genre;