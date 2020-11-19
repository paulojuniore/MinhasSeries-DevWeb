import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md'; 
import { FiStar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import api from '../../services/api';

const Serie = ({ serie, index }) => {

  function handleDelete(dado) {
    if (window.confirm(`Deseja remover a série/filme "${dado.nome}"?`)) {
      api.delete(`/series/${dado.id}`)
        .then(response => console.log(response));
    }
  }

  return (
    <tr key={ index+1 }>
      <th>{ index+1 }</th>
      <td>{ serie.nome }</td>
      <td>{ serie.genero_serie.genero }</td>
      <td>{ `+${serie.classificacao}` }</td>
      <td>
        <Link onClick={() => handleDelete(serie)} to="#" className="btn btn-danger">
          <MdDelete />
        </Link>
        <Link to={`/series/${ serie.id }`} className='btn btn-warning'>
          <MdEdit />
        </Link>
      </td>
      <td>
        <FiStar color="#ec1" />
      </td>
    </tr>
  )
}

export default Serie;