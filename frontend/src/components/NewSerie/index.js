import React from 'react';

const NewSerie = () => {
  return (
    <div className="container">
      <h3 style={{ marginTop: 30 }}>Cadastrar novo(a) filme/série</h3>
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="Nome do(a) filme/série" 
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

export default NewSerie;