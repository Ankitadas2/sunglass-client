import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores,setExplores]=useState([])
    useEffect(()=>{
        fetch('https://frozen-journey-92434.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setExplores(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2,fontSize:30, color: 'warning.main' }} variant="h6" component="div">
                    All services
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize:50, m: 5, color: 'warning.main'}} variant="h4" component="div">
                    Explore your choice
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        explores.map(explore => <Explore
                            key={explore.name}
                            explore={explore}
                        ></Explore>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explores;