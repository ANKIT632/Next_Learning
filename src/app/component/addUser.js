'use client'
import React, { useState } from 'react'
import {addUser} from '../redux/slice'
import { useDispatch } from 'react-redux';

function AddUser() {

    const [data,setData]=useState('');

    const dispatch =useDispatch();
    const userDispatch=()=>{
    
        dispatch(addUser(data));

    }

   
  return (
    <div>
        <h4>Add User</h4>
        <label>user : </label>
        <input type='text' placeholder='enter new user'  onChange={(e)=>setData(e.target.value)}/>
        <button onClick={userDispatch}>add user</button>
    </div>
  )
}

export default AddUser