import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
} from '@material-ui/core'
import {useHistory} from "react-router-dom";
import '../styles/Header.css'

const Header = () => {
  return (
    <AppBar position="static" className='app-bar'>
      <CssBaseline />
      <Toolbar className='toolbar'>
        <Typography variant="h4" className='logo' >
          Bezos
        </Typography>
        <div className='navlinks'>

        </div>
      </Toolbar>
    </AppBar >
  );
}

export default Header;
