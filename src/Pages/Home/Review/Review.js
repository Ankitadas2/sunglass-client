import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Review.css'
import Rating from 'react-rating'


const Review = () => {
    const [reviews,setReviews]=useState([])
     const { register, handleSubmit } = useForm();

    useEffect(()=>{
        fetch('https://frozen-journey-92434.herokuapp.com/orderReview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])



    const onSubmit = (data) => {
        fetch("https://frozen-journey-92434.herokuapp.com/orderReview",{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.insertedId){
            alert('Ohhh!! Thanks for your opinion')
        }
        
      })
        
        };
    return (
        <div>
            <h1>All reviews</h1>
       <h2>Total review:{reviews.length}</h2>
       <div className="service-container">
       {
                reviews.map((service)=>
                <div className="service pb-5">
           
                
                <h2>Name:{service.user}</h2>
                <h2>{service.email}</h2>
                <h2>Comment:{service.comment}</h2>
                
                <p >{service.description}</p>
                 <Rating initialRating={service.star} 
                 emptySymbol="far fa-star icon-color" 
                 fullSymbol="fas fa-star icon-color" readonly>

                 </Rating>
                
            </div>
                )
            }
            </div>

            <h1>Please give your review</h1>
            <form style={{marginTop:'50px',paddingBottom:'10px'}} className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue="" placeholder="Name" {...register("user",{ required: true })} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue="" placeholder="Email" {...register("email", { required: true })} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'80px'}} {...register("comment")}
                placeholder="Comment"
               
              />
              <br />
             <select style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} placeholder="Select your ratings" {...register("star")}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
<input style={{width:'100px',marginTop:'10px',paddingBottom:'10px',paddingTop:'10px',backgroundColor:'orangeRed'}}  type="submit" 
/>

</form>
        </div>
    );
};

export default Review;