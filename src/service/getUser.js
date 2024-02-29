import React from 'react'

async function getUser() {

 const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
  
  return users;
}

export default getUser