import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import abg1 from '../../../images/abt1.jfif'
import abg2 from '../../../images/abt2.jpeg'
import abg3 from '../../../images/abt3.jfif'
import { fontSize } from '@mui/system';

const About = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <h1 style={{ marginTop:40 , color:'blue', fontSize:50 }}>About us</h1>
      <Grid container rowSpacing={{xs:2}} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        <Grid item xs={6}>
            <img  style={{ width: 400, marginTop: '' }} src={abg1} alt="" />
        <Typography variant="subtitle1" gutterBottom component="div">
       There has many wonderfull sunglass.You can buy this products.WonderFull sunset sunglass.
      </Typography>
        </Grid>
        <Grid item xs={6}>
            <img  style={{ width: 400, marginTop: '' }} src= {abg2} alt="" />
        <Typography variant="subtitle1" gutterBottom component="div">
       There has many wonderfull sunglass.You can buy this products.WonderFull sunset sunglass.
      </Typography>
      </Grid>
        <Grid item xs={6}>
            <img  style={{ width: 400, marginTop: '' }} src={abg3} alt="" />
        <Typography variant="subtitle1" gutterBottom component="div">
       There has many wonderfull sunglass.You can buy this products.WonderFull sunset sunglass.
      </Typography>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default About;