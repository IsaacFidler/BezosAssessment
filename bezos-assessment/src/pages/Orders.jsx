import React from 'react';
import '../styles/Orders.css'
import MyTable from '../components/MyTable'
import {
  Box,
  Typography,
} from "@material-ui/core";

const Orders = () => {

  return (
    <Box className='orders-container'>
      <Box className='table-container'>
        <Typography variant="subtitle1" component="div" gutterBottom>
          All orders
        </Typography>
        {/* <div className="topics"> */}
        <MyTable className='my-table' />
      </Box >
    </Box>
  );
}

export default Orders;
