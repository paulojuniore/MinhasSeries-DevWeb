import React from 'react';

const Genre = () => {
  return (
    <div className='container'>
      <h2 className='main-text'>Gêneros</h2>
      <a href='generos/novoGenero' className='btn btn-primary'>Cadastrar novo gênero</a>
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