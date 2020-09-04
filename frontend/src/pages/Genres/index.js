import React from 'react';

import GeneralListComponent from '../../components/GeneralListComponent';

const columns = ["#", "Gênero", "Ação"]

const Genres = () => {
  return (
    <GeneralListComponent
      title="Gêneros"
      subtitle="gênero"
      columns={columns}
    />
  )
}

export default Genres;