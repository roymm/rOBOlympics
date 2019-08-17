import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}));

const TablaEquipo = props => {
  const classes = useStyles();
  const { equiposCategoria, numRondas } = props;

  const getHeaders = () => {
    let cells = [];
    for (let i = 1; i <= numRondas; i++) {
      cells.push(<TableCell align='right'>Ronda {i}</TableCell>);
    }
    return cells;
  };
  const getCells = nombreEquipo => {
    let cells = [];
    for (let i = 1; i <= numRondas; i++) {
      cells.push(
        <TableCell align='right'>
          {equiposCategoria[nombreEquipo][i] === undefined
            ? '-'
            : equiposCategoria[nombreEquipo][i]}
        </TableCell>
      );
    }
    return cells;
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Equipo</TableCell>
          {getHeaders()}
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(equiposCategoria).map(nombreEquipo => (
          <TableRow key={nombreEquipo}>
            <TableCell component='th' scope='row'>
              {nombreEquipo}
            </TableCell>
            <TableCell align='right'>
              {equiposCategoria[nombreEquipo]['1'] || '-'}
            </TableCell>
            {getCells(nombreEquipo)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TablaEquipo;
