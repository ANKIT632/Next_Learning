'use client'
import React from 'react'
import { useSelector } from 'react-redux'

function DisplayUser() {
    const userData=useSelector(data=>data.users);
    console.log(userData)
  return (
    
    <div>
    <hr/>
    displayUser :
    <ul>
        {userData.map((data,index)=><li key={index}>{data.name}</li>)}
    </ul>
    </div>
  )
}

export default DisplayUser