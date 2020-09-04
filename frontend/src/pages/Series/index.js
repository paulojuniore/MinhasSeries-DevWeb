import React from 'react';

import GeneralListComponent from '../../components/GeneralListComponent';

const columns = ["#", "Nome", "Gênero", "Classificação", "Ação"]

const Series = () => {
  return (
    <GeneralListComponent
      title="Séries"
      button_title="Nova série"
      subtitle="série"
      columns={columns}
    />
  )
}

export default Series;