import{ useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Orders = () => {
    const [orders,setOrders]=useState([])
    const {user}=useAuth()

    useEffect(()=>{
        fetch(`https://frozen-journey-92434.herokuapp.com/orderConfirm?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
// Delete the orders:by user

    const handleManageOrder=(id)=>{
      const proceed=window.confirm('Are you sure,You want to delete?')
      if(proceed){
       
       fetch(`https://frozen-journey-92434.herokuapp.com/orderConfirm/${id}`,{
           method:"DELETE"
       })
       .then(res=>res.json())
               .then(data=>{
                   console.log(data)
                   if(data.deletedCount){
                       alert("deleted Successfully")
                       const remainingUser=orders.filter(order=>order._id!==id)
                       setOrders(remainingUser)
                   }
       
               })
      }
  
  }

    return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Product </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="">
                {order.name}
              </TableCell>
              
              <TableCell align="right"> {order.price}</TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.description}</TableCell>
              <TableCell align="right">{order.status}</TableCell>
              <Button onClick={()=>handleManageOrder(order._id)} variant="contained">Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





        // <div>
        //     <h1>{orders.length}</h1>
        //    {
        //        orders.map(order=><h1> 
        //            {order.name}  : {order.price}</h1>)
        //    }
        // </div>
    );
};

export default Orders;