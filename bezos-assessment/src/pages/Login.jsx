import React, {useState, useEffect} from 'react';

import {TextField, Button, Typography, Paper, Grid} from '@material-ui/core'

import '../styles/Login.css'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginWarning, setLoginWarning] = useState('')
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (username !== 'test' || password !== 'an insecure password')
    {
      setLoginWarning('wrong details!')


    } else
    {
      setLoginWarning('correct details!')
      sessionStorage.setItem('isAuth', 'true')
      props.setIsAuth(true)
      sessionStorage.setItem('token', "c6364d40-df48-4514-8ef1-0d11c0b5e6e7")

    }
  }
  return (
    <div className='login-container'>

      <Paper elevation={10} className='login-form-continer' >
        <Typography variant="h2" component="div" gutterBottom>
          Sign in
        </Typography>
        <form className='login-form' onSubmit={handleSubmit}>
          <TextField
            className='text-input'
            onChange={e => setUsername(e.target.value)}
            color="secondary"
            id="outlined-basic"
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth required

          />
          <TextField
            className='text-input'
            onChange={e => setPassword(e.target.value)}
            color="secondary"
            id="outlined-basic"
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            fullWidth required

          />
          <Button
            type='submit'
            color="primary"
            fullWidth
            variant="contained"

          >
            Login
          </Button>
        </form>
        <Typography variant="h4" component="div" gutterBottom>
          {loginWarning}
        </Typography>
      </Paper>
    </div >
  );
}

export default Login;
