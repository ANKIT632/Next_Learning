'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


function Page({params}) {
    
    const Router=useRouter();
   
    console.log(Router);
  return (
    <div> 
        <ul>
            <li>
                <p>Name : {params.StuDetails[0]}</p>
            </li>
            <li>
                <p>roll No : {params.StuDetails[1]}</p>
            </li>
            <li>
                <p>class : {params.StuDetails[2]}</p>
            </li>

        </ul>

        <button onClick={()=>Router.back()}>Back</button>
    </div>
  )
}

export default Page