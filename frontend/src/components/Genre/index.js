import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md'; 

import api from '../../services/api';

const Genre = ({ index, genero }) => {

  function handleDelete(dado) {
    if (window.confirm(`Deseja remover o gênero "${dado.genero}"?`)) {
      api.delete(`/generos/${dado.id}`)
        .then(response => console.log(response));
    }
  }

  return (
    <tr key={ index+1 }>
      <th>{ index+1 }</th>
      <td>{ genero.genero }</td>
      <td>
        <Link onClick={() => handleDelete(genero)} to="#" className="btn btn-danger">
          <MdDelete />
        </Link>
        <Link to={`/generos/${ genero.id }`} className='btn btn-warning'>
          <MdEdit />
        </Link>
      </td>
    </tr>
  );
}

export default Genre;