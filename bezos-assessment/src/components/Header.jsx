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

const Header = (props) => {

  const history = useHistory();

  return (
    <AppBar position="static" className='app-bar'>
      <CssBaseline />
      <Toolbar className='toolbar'>
        <Typography variant="h4" className='logo' >
          Bezos
        </Typography>
        <div className='navlinks'>
          {sessionStorage.getItem('isAuth') === 'true' ?
            < Button
              onClick={() => {
                props.setIsAuth(false)
                sessionStorage.setItem('isAuth', 'false')
                sessionStorage.setItem('token', '')
                history.push("/");
              }}
              variant="contained"
              color='secondary'
            >
              Logout
            </Button> : <div></div>}
        </div>
      </Toolbar>
    </AppBar >
  );
}

export default Header;
