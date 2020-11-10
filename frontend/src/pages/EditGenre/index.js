import React from 'react';

import NewOrEditGenre from '../../components/NewOrEditGenre';

const EditGenre = () => {
  return (
    <NewOrEditGenre 
      title="Editar gênero"
      placeholder="Novo nome do gênero"
      title_button="Editar"
      operation="edit" />
  )
}

export default EditGenre;