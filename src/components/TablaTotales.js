/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getForm, getTotales } from '../utils/scoreboard';
import TablaEquipo from './TablaEquipo';

const TablaTotales = () => {
  const [totales, setTotales] = useState();
  const [elementary, setElementary] = useState();
  const [junior, setJunior] = useState();
  const [senior, setSenior] = useState();

  useEffect(() => {
    getForm().then(rows => {
      getTotales(rows).then(_totales => {
        setTotales(_totales);
      });
    });
  }, []);
  useEffect(() => {
    console.log('Puntuaciones totales: ', totales);
    if (totales) {
      setElementary(totales['Elementary']);
      setJunior(totales['Junior']);
      setSenior(totales['Senior']);
    }
  }, [totales]);

  return (
    <div style={{ padding: 20 }}>
      <h3>Puntajes totales</h3>
      <h5>Elementary</h5>
      <Grid item xs={12}>
        {elementary !== undefined && (
          <TablaEquipo equiposCategoria={elementary} numRondas={4} />
        )}
      </Grid>
      <h5>Junior</h5>
      <Grid item xs={12}>
        {junior !== undefined && (
          <TablaEquipo equiposCategoria={junior} numRondas={5} />
        )}
      </Grid>
      <h5>Senior</h5>
      <Grid item xs={12}>
        {senior !== undefined && (
          <TablaEquipo equiposCategoria={senior} numRondas={3} />
        )}
      </Grid>
    </div>
  );
};

export default TablaTotales;
