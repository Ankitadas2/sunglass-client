import{ useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";


const ManageOrder = () => {
    const [manage,setManage]=useState([])
    const [orderId,setOrderId]=useState('')

    useEffect(()=>{
        fetch('https://frozen-journey-92434.herokuapp.com/orderConfirm')
        .then(res=>res.json())
        .then(data=>setManage(data))
    },[])

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
                         const remainingUser=manage.filter(order=>order._id!==id)
                         setManage(remainingUser)
                     }
         
                 })
        }
    
    }
const handleOrderId=(id)=>{
setOrderId(id);
}

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      fetch(`https://frozen-journey-92434.herokuapp.com/updateStatus/${orderId}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>console.log(result))
      console.log(data)};
     

    return (
        <div>
            <h1>Total amount:{manage.length}</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Product </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">
            Status
    </TableCell>
    <TableCell align="right">
            Update Status
    </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manage.map((order) => (
            <TableRow
              key={order.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="">
                {order.name}
              </TableCell>
              
              <TableCell align="right">{order.price}</TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.description}</TableCell>
              <TableCell align="right">{order.status}</TableCell>
              <TableCell align="right">
              <form onSubmit={handleSubmit(onSubmit)}>
      
      <select onClick={()=>handleOrderId(order?._id)} {...register("status")}>
        <option value="pending">pending</option>
        <option value="approved">approved</option>
        <option value="shipped">Shipped</option>
      </select>
      <input type="submit" />
    </form>
    </TableCell>
              <Button onClick={()=>handleManageOrder(order._id)} >Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default ManageOrder;