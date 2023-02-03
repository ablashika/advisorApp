import React from 'react';
import ".././styles.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import Screenshot from './Screenshot';


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
    <div id="print" className="first-container">
       <div  className="advice-box">
      
      

      {advices.map((users)=>{
         return ( <div key={users.id}>
          <p id='para-id'>A D V I C E #{users.id}</p>
          <p id='advice-text'>"{users.advice}"</p>
          
          </div>
)
       })} 
       

       <div>
       <svg id="red" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
       </div>


       </div>
       
       <Screenshot/>
    </div>
  )
}
