import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper, Grid, Box} from '@material-ui/core'
import '../styles/Login.css'
const axios = require('axios');

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginWarning, setLoginWarning] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();

    {
      async function makeGetRequest () {
        try
        {
          //send form information
          let payload = {username: username, password: password};

          let res = await axios.post('https://interview-api.staging.bezos.ai/v1/login', payload);

          let data = res.data;
          setLoginWarning('correct details!')
          sessionStorage.setItem('isAuth', 'true')
          props.setIsAuth(true)

          // localStorage only takes strings as data
          const token = String(data)
          console.log(token)
          sessionStorage.setItem('token', token)


        } catch (error)
        {
          setLoginWarning('The Detail you entered were incorrect')
          sessionStorage.setItem('isAuth', 'false')
          console.log(error)
        }
      }

      makeGetRequest();

    }
  }
  return (
    <div className='login-container'>

      <Paper elevation={10} className='login-form-continer' >
        <Typography className='signin-text' ariant="subtitle1" component="div" gutterBottom>
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
            fullWidth
            required

          />

          <TextField
            className='text-input'
            mt={20}
            onChange={e => setPassword(e.target.value)}
            color="secondary"
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            fullWidth
            required

          />
          <Box
            className='login-button'
          >
            <Button
              type='submit'
              color="primary"
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </form>
        <Typography variant="h4" component="div" gutterBottom>
          {loginWarning}
        </Typography>
      </Paper>
    </div >
  );
}

export default Login;
