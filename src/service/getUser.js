import React from 'react'

async function getUser() {

 const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
  return users;
}

export default getUser