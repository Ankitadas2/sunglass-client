import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

const Detail = (props) => {
    const {name,description,img,price}=props.detail;
    return (
        <div>
            <h1>helllo</h1>
            <Grid item xs={4} sm={4} md={4}>
 <Card sx={{ minWidth: 275 ,bosShadow:0 }}>
 <CardMedia
        component="img"
       style={{width:'auto',height:
    '80px',margin:'0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
       
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {price}
        </Typography>
        
        <Typography variant="body2">
          {description}
          <br />
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.warning">
        
        </Typography>
        
      </CardContent>
     
    </Card>
            </Grid>
        
        </div>
    );
};

export default Detail;