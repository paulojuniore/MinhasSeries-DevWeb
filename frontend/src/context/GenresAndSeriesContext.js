import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '../services/api';

const GenresAndSeriesContext = createContext();

export default function GenresAndSeriesProvider({ children }) {
  const [series, setSeries] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get('/series')
      .then(response => {
        setSeries(response.data);
      });
  }, [series]);

  useEffect(() => {
    api.get('/generos')
      .then(response => {
        let responseOrdered = response.data.sort(compare);
        setGeneros(responseOrdered);
      });
  }, [generos]);

  // função de comparação de nomes de gêneros para ordenação.
  function compare(a, b){
    const genreA = a.genero.toUpperCase();
    const genreB = b.genero.toUpperCase();
    
    let compare = 0;
    if(genreA > genreB){
        compare = 1;
    } else if(genreA < genreB){
        compare = -1;
    }
    return compare;
  }

  return (
    <GenresAndSeriesContext.Provider value={{
      series,
      setSeries,
      generos,
      setGeneros
    }}>
      { children }
    </GenresAndSeriesContext.Provider>
  )
}

export function useGenresAndSeries() {
  const context = useContext(GenresAndSeriesContext);
  const { series, setSeries, generos, setGeneros } = context;
  return { series, setSeries, generos, setGeneros };
}