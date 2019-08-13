import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    borderTop: `0.0625rem solid rgba(0,0,0,.1)`,
    padding: '1em 0',
    textAlign: 'center',
    backgroundColor: '#212121',
    color: '#E0E0E0',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h6 variant="body1">
        &copy;&nbsp;
        {new Date().getFullYear()}
        &nbsp;
        ?
      </h6>
    </footer>
  );
};

export default Footer;