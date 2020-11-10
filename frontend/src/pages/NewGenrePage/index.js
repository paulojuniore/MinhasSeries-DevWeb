import React from 'react';

import NewOrEditGenre from '../../components/NewOrEditGenre';

const NewGenrePage = () => {
  return (
    <NewOrEditGenre 
      title="Cadastrar novo gênero"
      placeholder="Nome do gênero"
      title_button="Cadastrar"
      operation="create" />
  )
}

export default NewGenrePage;