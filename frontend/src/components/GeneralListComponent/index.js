import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md'; 

import api from '../../services/api';

import './styles.css';

const GeneralListComponent = (props) => {
  const [generos, setGeneros] = useState([]);
  const [series, setSeries] = useState([]);
  const type = props.type;

  useEffect(() => {
    if (type === 'generos') {
      api.get('/generos')
        .then(response => {
          let responseOrdered = response.data.sort(compare);
          setGeneros(responseOrdered);
        });
    } else if (type === 'series') {
      api.get('/series')
        .then(response => {
          setSeries(response.data);
        });
    }
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
            { props.columns.map((line, index) => <th key={ index+1 } scope='col'>{ line }</th>) }
          </tr>
        </thead>
        <tbody>
          { (type === 'generos') && generos.map((genero, index) => {
              return (
                <tr key={ index+1 }>
                  <th>{ index+1 }</th>
                  <td>{ genero.genero }</td>
                  <td>
                    <Link to="#" className="btn btn-danger">
                      <MdDelete />
                    </Link>
                    <Link to="#" className='btn btn-warning'>
                      <MdEdit />
                    </Link>
                  </td>
                </tr>
              )
            }) 
          }

          { (type === 'series') && series.map((serie, index) => {
              return (
                <tr key={ index+1 }>
                  <th>{ index+1 }</th>
                  <td>{ serie.nome }</td>
                  <td>{ serie.genero_serie.genero }</td>
                  <td>{ `+${serie.classificacao}` }</td>
                  <td>
                    <Link to="#" className="btn btn-danger">
                      <MdDelete />
                    </Link>
                    <Link to="#" className='btn btn-warning'>
                      <MdEdit />
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default GeneralListComponent;