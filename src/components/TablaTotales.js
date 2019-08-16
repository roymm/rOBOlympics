import React, { useState, useEffect } from 'react';
import { getSpreadsheet, getTotales } from '../utils/scoreboard';

const TablaTotales = () => {
  const [sheetLoaded, setSheetLoaded] = useState(false);
  const [totales, setTotales] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getSpreadsheet().then(rows => {
      setTotales(getTotales(rows));
    });
  }, []);
  useEffect(() => {
    console.log('Puntuaciones totales: ', totales);
    setSheetLoaded(true);
  }, [totales]);

  return sheetLoaded && <p>Vean la consola</p>;
};

export default TablaTotales;
