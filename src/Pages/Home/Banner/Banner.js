import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg.jpg';
import bg3 from '../../../images/bg3.jpg';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Repeat } from '@mui/icons-material';


const bannerBg = {
    // background: `url(${bg3})`,
    backgroundrepeat:'no-repeat',
    width:'900px'
    

}

const verticalCenter = {
    // display: 'flex',
    // alignItems: 'center',
    // height: 400
    
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={4} md={12} style={verticalCenter} >
                    <img style={{ width: '650px' }} src={bg3} alt="" />
                    <Typography variant="h3">
                            SunGlass Store with new item
                        </Typography>
                </Grid>
                

            </Grid>
        </Container>
    );
};

export default Banner;