import React, {useState, useEffect} from 'react';
import '../App.css';
import {
  createTheme,
  ThemeProvider,
  Button

} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

import {
  Link,
  useParams,
} from 'react-router-dom'

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

const Orderdetail = () => {
  const {id} = useParams()
  const [orderDetail, setOrderDetail] = useState({})

  useEffect(() => {
    const getOrders = () => {
      const token = String(sessionStorage.getItem('token'))
      var url = `https://interview-api.staging.bezos.ai/v1/detail/${id}`;
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => setOrderDetail(result))
        .catch(error => console.log('error', error));
    }


    getOrders()

  }, [])

  console.log(orderDetail)
  return (
    <ThemeProvider theme={theme} >
      <div>
        <h2>User Detail </h2>
        <h3>ID: {id}</h3>
        <Button
          color="primary"
          variant="contained"
          component={Link} to={'/orders'}
        >Back to all orders</Button>


        {/* {!orderDetail ? <span> Loading </span> :
          <div>
            <h3>ID: {id}</h3>
            <Button
              color="primary"
              variant="contained"
              component={Link} to={'/orders'}
            >Primary</Button>

          </div>
        } */}
      </div>
    </ThemeProvider >
  );
}

export default Orderdetail;
