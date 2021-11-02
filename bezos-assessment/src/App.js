import React, {useState} from 'react';
import './App.css';

import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

// pages
import ProtectedRoutes from './routes/ProtectedRoutes'
import Orders from './pages/Orders'
import OrderDetail from './pages/OrderDetail'
import Login from './pages/Login'

//components
import Header from './components/Header'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3EB779',
    },
    secondary: {
      main: '#4E6595',
    },
  },
});


function App () {

  const [isAuth, setIsAuth] = useState(false);
  const isAuthVar = sessionStorage.getItem('isAuth')


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Header setIsAuth={setIsAuth} isAuth={isAuth} />
          <Route exact path="/">

            <Login setIsAuth={setIsAuth} />

          </Route>

        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
