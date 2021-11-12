import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [manageAdmin,setManageAdmin]=useState([])
    useEffect(()=>{
        fetch('https://frozen-journey-92434.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setManageAdmin(data))
    },[])

    const handleManageProduct=(id)=>{
        const proceed=window.confirm('Are you sure,You want to delete?')
        if(proceed){
         
         fetch(`https://frozen-journey-92434.herokuapp.com/manageProduct/${id}`,{
             method:"DELETE"
         })
         .then(res=>res.json())
                 .then(data=>{
                     console.log(data)
                     if(data.deletedCount){
                         alert("deleted Successfully")
                         const remainingUser=manageAdmin.filter(manageproduct=>manageproduct._id!==id)
                         setManageAdmin(remainingUser)
                     }
         
                 })
        }
    
    }



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2,fontSize:30, color: 'warning.main' }} variant="h6" component="div">
                    
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize:50, m: 5, color: 'warning.main'}} variant="h4" component="div">
                    Collection of Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   {
                       manageAdmin.map(manageproduct=>
                       
                            <Grid item xs={8} sm={4} md={4}>
 <Card sx={{ minWidth: 275 ,bosShadow:0 }}>
 <CardMedia
        component="img"
       style={{width:'auto',height:
    '80px',margin:'0 auto'}}
        image={manageproduct.img}
        alt="green iguana"
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {manageproduct.name}
        </Typography>
        <Typography variant="h5" component="div">
        Price: <span>$</span> {manageproduct.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>
        <Typography variant="body2">
          {manageproduct.description}
          <br />
          <Button variant="contained" color="warning" onClick={()=>handleManageProduct(manageproduct._id)} >Delete</Button>
        </Typography>
      </CardContent>
     
    </Card>
            </Grid>
                       )
                   }
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageProducts;