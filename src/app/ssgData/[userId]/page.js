import React from 'react'
import getData from '../../../service/getUser'

async function page(props) {
    // call api.
    let data = await getData();
    
    const id = props.params.userId;
 const user=data[id-1];

  return (
    <div>
      <h4>User Details :</h4>
       <p>name : {user.name}</p>
       <p>email : {user.email}</p>
    </div>
  )
}

export default page


// all page static store data in backend 
 export async function getStaticParams() {    let data = await getData();
      
    return  data.map((user) => {
        return {
                userId: user.id.toString 
        }
    })
  }