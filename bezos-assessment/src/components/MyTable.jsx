import React, {useState, useEffect} from 'react';

import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table
} from "@material-ui/core";

import {Link} from 'react-router-dom'

import '../styles/Table.css'


const MyTable = () => {

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    console.log('useeffect is running')
    const getOrders = () => {
      const token = String(sessionStorage.getItem('token'))
      var url = "https://interview-api.staging.bezos.ai/v1/summary/2021-10-24T12:00:00.000Z/2021-10-30T12:00:00.000Z";
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => setOrders(result))
        .catch(error => console.log('error', error));
    }


    getOrders()
  }, [])
  console.log(orders[0])

  return (
    <TableContainer className='table-container' component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Order Number</TableCell>
            <TableCell >Order Date</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Dispatch Date </TableCell>
            <TableCell >Courier Service </TableCell>
            <TableCell >Courier Status </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {orders.length < 1 ? <div>loading</div> : orders.map((row) => (
            <TableRow key={row.name} component={Link} to={`/order/${row.id}`}>
              <TableCell >{row.order_number}</TableCell>
              <TableCell >{row.order_date}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.courier_service}</TableCell>
              <TableCell >{row.courier_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default MyTable;
