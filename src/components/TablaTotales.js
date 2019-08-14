import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getForm, getTotales } from '../utils/scoreboard';

const TablaTotales = () => {
  const [sheetLoaded, setSheetLoaded] = useState(false);
  const [totales, setTotales] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getForm().then(rows => {
      getTotales(rows).then(_totales => {
        setTotales(_totales);
      });
    });
  }, []);
  useEffect(() => {
    console.log('Puntuaciones totales: ', totales);
    setSheetLoaded(true);
  }, [totales]);

  return (
    sheetLoaded && (
      <div>
        <h3>Puntajes totales</h3>
        <Grid item xs={12}>
          <p>una tabla aqui</p>
        </Grid>
        <h3>Otra tabla</h3>
        <Grid item xs={12} />
      </div>
    )
  );
};

export default TablaTotales;
