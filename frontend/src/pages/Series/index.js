import React from 'react';

import GeneralListComponent from '../../components/GeneralListComponent';

const columns = ["#", "Nome", "Gênero", "Classificação", "Ação", "Favorito(a)"]

const Series = () => {
  return (
    <GeneralListComponent
      title="Séries"
      button_title="Nova série"
      subtitle="série"
      columns={columns}
      path="series/novaSerie"
      type="series"
    />
  )
}

export default Series;