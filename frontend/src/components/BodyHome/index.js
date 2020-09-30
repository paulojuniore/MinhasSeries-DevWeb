import React, { useState, useEffect } from 'react';

import api from '../../services/api';

const BodyHome = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api.get('/series')
      .then(response => {
        setSeries(response.data);
      });
  })

  return (
    <div className='container'>
      <h2 style={{ marginTop: 25, marginBottom: 25 }}>
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