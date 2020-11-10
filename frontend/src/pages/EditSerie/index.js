import React from 'react';

import NewOrEditSerie from '../../components/NewOrEditSerie';

const EditSerie = () => {
  return (
    <NewOrEditSerie 
      title="Editar série/filme"
      title_button="Editar"
      operation="edit" />
  );
}

export default EditSerie;