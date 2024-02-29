/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react'



 function Page({params}) {


    let [name,setName]=useState("");
    let [email,setEmail]=useState('');


    useEffect(()=>{
        getUserDetails();
    },[])

    async function getUserDetails(){
        let payload=await fetch(`http://localhost:3000/api/users/${params.userId}`)

        payload=await payload.json();
       setName(payload.results[0].name);
       setEmail(payload.results[0].email);


    }

    async function addUser(){

    let response=await fetch(`http://localhost:3000/api/users/${params.userId}`
    ,{
        method:'PUT',
        body:JSON.stringify({name,email})
    }
    );


    response= await response.json();
    console.log(response);
  
  
    }


 

  return (
   <div>
    

       <label >Name : </label>
       <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>

        <br/> <br/>

       <label >Email : </label>
       <input type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
       <button onClick={addUser}>Update</button>
   </div>
  )
}

export default Page