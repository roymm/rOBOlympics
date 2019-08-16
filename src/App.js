import React from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { lime, lightBlue } from '@material-ui/core/colors';
import Footer from './components/Footer';
import TablaTotales from './components/TablaTotales';
import SimpleTable from './components/SimpleTable';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  root: {
    minHeight: '100vh',
    margin: 'auto',
    marginBottom: '4rem',
  },
}));

const theme = {
  palette: {
    primary: lime,
    secondary: lightBlue,
  },
  status: {
    danger: 'orange',
  },
};

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <h3 variant="h6" color="inherit" className={classes.title} data-testid="header">
            Olimpiada Nacional de Robótica
          </h3>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} className={classes.root}><TablaTotales /><SimpleTable /></Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
