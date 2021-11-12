import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Home = (props) => {
    
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Review></Review>


            <Footer></Footer>
        </div>
    );
};

export default Home;