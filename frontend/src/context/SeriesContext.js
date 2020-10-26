import React, { createContext, useState, useContext, useEffect } from 'react';

import api from '../services/api';

const SeriesContext = createContext();

export default function SeriesProvider({ children }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api.get('/series')
      .then(response => {
        setSeries(response.data);
      });
  }, []);

  return (
    <SeriesContext.Provider value={{
      series,
      setSeries
    }}>
      { children }
    </SeriesContext.Provider>
  )
}

export function useSeries() {
  const context = useContext(SeriesContext);
  const { series, setSeries } = context;
  return { series, setSeries };
}