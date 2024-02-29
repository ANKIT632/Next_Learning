'use client'

import React, { useState } from 'react'



function Page() {


    let [name,setName]=useState("");
    let [email,setEmail]=useState();


    async function addUser(){
    let response=await fetch('http://localhost:3000/api/users'
    ,{
        method:'post',
        body:JSON.stringify({name,email})
    }
    )

    response=await response.json();
    console.log(response);
    }

  

  return (
   <div>
       <label >Name : </label>
       <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>

        <br/> <br/>

       <label >Email : </label>
       <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
       <button onClick={addUser}>Submit</button>
   </div>
  )
}

export default Page