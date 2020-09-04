import React from 'react';

import GeneralListComponent from '../../components/GeneralListComponent';

const colums = ["Gênero", "Ação"]

const Genres = () => {
  return (
    <GeneralListComponent
      title="Gêneros"
      subtitle="gênero"
      columns={colums}
    />
  )
}

export default Genres;