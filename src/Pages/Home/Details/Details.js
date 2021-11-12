import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';
import useAuth from '../../../hooks/useAuth';
const Details = () => {
    const {user} =useAuth()
    const {serviceId}=useParams()
     const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://frozen-journey-92434.herokuapp.com/products/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.status='pending'
      fetch("https://frozen-journey-92434.herokuapp.com/orderConfirm",{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.insertedId){
          alert('Your order is Successfull!!!!')
      }
      });
  }
    return (
        <div>
            <h1>Details</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 700, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Happy Shopping!!!!!!
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                   
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                <Grid item xs={4} sm={4} md={4}>
 <Card sx={{ minWidth: 275 ,bosShadow:0 }}>
 <CardMedia
        component="img"
       style={{width:'auto',height:
    '80px',margin:'0 auto'}}
        image={details.img}
        alt="green iguana"
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {details.name}
        </Typography>
        <Typography variant="h5" component="div">
          {details.price}
        </Typography>
        
        <Typography variant="body2">
          {details.description}
          <br />
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.warning">
        
        </Typography>
        
      </CardContent>
     
    </Card>
            </Grid>
                </Typography>
                </Grid>
            </Container>
           
            </Box>
            
        <h1 >Select all items</h1>
        
         
          <form style={{marginTop:'50px',paddingBottom:'10px'}} className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue={user.displayName} {...register("user")} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue={user.email} {...register("email", { required: true })} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} placeholder="Address" defaultValue="" {...register("address")} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} placeholder="City" defaultValue="" {...register("city")} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} placeholder="phone number" defaultValue="" {...register("phone")} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue={details?.name} {...register("name",{required:true})} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue={details.price} {...register("price",{required:true})} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}}  defaultValue={details.description} {...register("description",{required:true})} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}}  defaultValue={details.img} {...register("image",{required:true})} />
<br />
<input style={{width:'100px',marginTop:'10px',paddingBottom:'10px',paddingTop:'10px',backgroundColor:'orangeRed'}} type="submit" />

</form>
        </div>
    );
};

export default Details;