import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Genre from '../Genre';
import Serie from '../Serie';

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
    // eslint-disable-next-line
  }, []);

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
                <Genre 
                  genero={ genero }
                  index={ index } />
              )
            }) 
          }

          { (type === 'series') && series.map((serie, index) => {
              return (
                <Serie 
                  serie={ serie } 
                  index={ index } />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default GeneralListComponent;