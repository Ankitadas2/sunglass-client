import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
      axios.post('https://frozen-journey-92434.herokuapp.com/products',data)
      .then(res=>{
          if(res.data.insertedId){
            console.log(data);
              alert('Your service is included')
          }
      })
      
  }
    return (
        <div>
          <h1 style={{fontSize:'25px',paddingBottom:'6px',color:'green',fontWeight:'100px'}}>Add New Services</h1>
            <form style={{marginTop:'50px',paddingBottom:'10px'}} onSubmit={handleSubmit(onSubmit)}>
            <input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}}
                {...register("name")}
                placeholder="name"
                
              />
              <br />
            
              <input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}}
                {...register("description")}
                placeholder="Description"
               
              />
              <br />
              <input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}}
                {...register("image", { required: true })}
                placeholder="Image Link"
               
              />
              <br/>
      <input style={{width:'100px',marginTop:'10px',paddingBottom:'10px',paddingTop:'10px',backgroundColor:'orangeRed'}} type="submit" />
    </form>
        </div>
    );
};

export default AddService;