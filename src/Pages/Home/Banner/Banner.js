import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.jpg';
import bg3 from '../../../images/bg3.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Repeat } from '@mui/icons-material';


const bannerBg = {
    // background: `url(${bg3})`,
    // backgroundrepeat:'no-repeat',
    // width:'900px'
    

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
            
            <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '650px' }} src={bg3} alt="" />
                </Grid>
                
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{  color: 'green',marginLeft:'24px' }}>
                            Glassy Sunglass Shop <br />
                            
                        </Typography>
                        <Typography variant="h3" sx={{ my: 3, fontSize: 23, fontWeight: 300, color: 'gray',marginLeft:'19px' }}>
                            Sunglass thats are very fashionable design.All are collected for you choose any style and get fashionable.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginLeft:'25px'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;