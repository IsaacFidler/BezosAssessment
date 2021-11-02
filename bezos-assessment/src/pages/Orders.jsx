import React, {useState, useEffect} from 'react';
import '../styles/Orders.css'
import MyTable from '../components/MyTable'
import {
  Box,
  Typography,
} from "@material-ui/core";
const axios = require('axios');

// import {withRouter} from 'react-router-dom'


const Orders = () => {




  return (
    <Box className='orders-container'>
      <Box className='table-container'>
        <Typography variant="h2" component="div" gutterBottom>
          All orders
        </Typography>
        {/* <div className="topics"> */}
        <MyTable />
      </Box >
    </Box>
  );
}

export default Orders;
