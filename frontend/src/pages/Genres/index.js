import React from 'react';

import GeneralListComponent from '../../components/GeneralListComponent';

const columns = ["#", "Gênero", "Ação"]

const Genres = () => {
  return (
    <GeneralListComponent
      title="Gêneros"
      button_title="Novo gênero"
      subtitle="gênero"
      columns={columns}
      path="/generos/novoGenero"
    />
  )
}

export default Genres;