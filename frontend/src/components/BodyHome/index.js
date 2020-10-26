import React from 'react';

import { useSeries } from '../../context/SeriesContext';

const BodyHome = () => {
  const { series } = useSeries();

  return (
    <div className='container'>
      <h2 style={{ marginTop: 25, marginBottom: 25 }} data-testid="title">
        Filmes e Séries <span role="img" aria-label="Emojis">🎞️🎥</span>
      </h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Gênero</th>
            <th scope='col'>Classificação</th>
          </tr>
        </thead>
        <tbody>
          { series.map((serie, index) => {
            return (
              <tr key={index+1}>
                <th>{index+1}</th>
                <td>{ serie.nome }</td>
                <td>{ serie.genero_serie.genero }</td>
                <td>+{ serie.classificacao }</td>
              </tr>
            )
          }) }
        </tbody>
      </table>
    </div>
  );
}

export default BodyHome;