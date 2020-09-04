import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const GeneralListComponent = (props) => {
  return (
    <div className='container'>
      <h2 className='title'>
        { props.title }
      </h2>
      <Link to='generos/novoGenero' className='btn btn-primary'>
        Novo { props.subtitle }
      </Link>
      <div className='input-group-mb-3'>
        <input 
          type="text" 
          className="form-control" 
          placeholder={`Pesquisar por ${props.subtitle}...`}
          aria-describedby="basic-addon2" 
        />
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            { props.columns.map(line => <th scope='col'>{ line }</th>) }
          </tr>
        </thead>
        <tbody>
           <tr>
             <th>1</th>
             <td>Ação</td>
             <td>Editar/Remover</td>
           </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GeneralListComponent;