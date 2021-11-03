import React, {useState, useEffect} from 'react';

import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Box,
  TextField,
} from "@material-ui/core";
import DateTimePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {Link} from 'react-router-dom'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import '../styles/Table.css'


const MyTable = () => {

  const [orders, setOrders] = useState([]);
  const [date1, setDate1] = React.useState(new Date('2014-08-18T21:11:54'));
  const [date2, setDate2] = React.useState(new Date('2014-08-18T21:11:54'));
  console.log(new Date('2014-08-18T21:11:54'))
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  useEffect(() => {
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

  return (
    <Box className='table-box-container'>
      <Box className='date-picker'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box className='date-container'>
            <DateTimePicker
              label="Date&Time picker"
              value={date1}
              // onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box className='date-container'>
            <DateTimePicker
              label="Date&Time picker"
              value={date2}
              // onChange={e => set(e.target.value)}
              onChange={e => console.log(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </LocalizationProvider>
      </Box>
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
              <TableRow key={row.name} component={Link} to={`/order/${row.order_number}`}>
                <TableCell >{row.order_number}</TableCell>
                <TableCell >{row.order_date}</TableCell>
                <TableCell >{row.status}</TableCell>
                <TableCell >{row.despatch_date}</TableCell>
                <TableCell >{row.courier_service}</TableCell>
                <TableCell >{row.courier_status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </Box >
  );
}

export default MyTable;
