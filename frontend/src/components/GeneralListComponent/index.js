import React from 'react';
import { Link } from 'react-router-dom';

import Genre from '../Genre';
import Serie from '../Serie';

import { useGenresAndSeries } from '../../context/GenresAndSeriesContext';

import './styles.css';

const GeneralListComponent = (props) => {
  const { generos } = useGenresAndSeries();
  const { series } = useGenresAndSeries();
  const type = props.type;

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