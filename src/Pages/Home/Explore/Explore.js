import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Explore = (props) => {
    const {_id,name,description,img,price}=props.explore;
    return (
        
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
        Price: <span>$</span> {price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>
        <Typography variant="body2">
          {description}
          <br />
          <Link to={`/details/${_id}`}>
        <Button variant="contained" sx={{ mb: 3 }}>Order Now</Button>
        </Link>
        </Typography>
      </CardContent>
     
    </Card>
            </Grid>
        
    );
};

export default Explore;