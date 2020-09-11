import React from 'react';

const GeneralNewItemComponent = (props) => {
  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>{ props.title }</h3>
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="Nome do gênero" 
            style={{ marginTop: 20 }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default GeneralNewItemComponent;