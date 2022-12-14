import React from 'react';
import ".././styles.css"
import { useEffect, useState } from "react";
import axios from 'axios';






export default function AdvisoPage() {

  let myAdvice = []
  const [advices, setAdvice] = useState(myAdvice)

  useEffect (()=>{
    getAllPost()
  },[])


const getAllPost = () =>{
  axios
  .get("https://api.adviceslip.com/advice")
  .then((res) => {
    // console.log(res);
    console.log("jj",[res.data.slip]);
    setAdvice([res.data.slip]);
  })
  .catch((err) => {
    console.log(err);
  });
  
  }  
  return (
    <div className="first-container">
       <div  className="advice-box">
      
      

      {advices.map((users, key)=>{
         return ( <div>
          <p>{users.id}</p>
          <p>{users.advice}</p>
          
          </div>
)
       })} 
       </div>

    </div>
  )
}
