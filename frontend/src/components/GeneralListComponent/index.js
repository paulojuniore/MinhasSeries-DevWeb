import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md'; 

import api from '../../services/api';

import './styles.css';

const GeneralListComponent = (props) => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get('/generos')
    .then(response => {
      let responseOrdered = response.data.sort(compare);
      setGeneros(responseOrdered);
    });
  })

  // função de comparação de nomes de gêneros para ordenação.
  function compare(a, b){
    const genreA = a.genero.toUpperCase();
    const genreB = b.genero.toUpperCase();
    
    let compare = 0;
    if(genreA > genreB){
        compare = 1;
    } else if(genreA < genreB){
        compare = -1;
    }
    return compare;
  }

  return (
    <div className='container'>
      <h2 className='title'>
        { props.title }
      </h2>
      <Link to={ props.path } className='btn btn-primary'>
        { props.button_title }
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
          { generos.map((genero, index) => {
            return (
              <tr>
                <th>{ index+1 }</th>
                <td>{ genero.genero }</td>
                <td>
                    <Link className="btn btn-danger">
                        <MdDelete />
                    </Link>
                    <Link className='btn btn-warning'>
                        <MdEdit />
                    </Link>
                </td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    </div>
  );
}

export default GeneralListComponent;