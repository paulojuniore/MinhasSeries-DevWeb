import React from 'react';

const BodyHome = () => {
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
          <tr>
            <th>1</th>
            <td>Supernatural</td>
            <td>Ficção</td>
            <td>16</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Elite</td>
            <td>Drama</td>
            <td>17</td>
          </tr>
          <tr>
            <th>3</th>
            <td>The walking dead</td>
            <td>Ação</td>
            <td>18</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Naruto</td>
            <td>Anime</td>
            <td>10</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Dragon Ball Z</td>
            <td>Anime</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BodyHome;