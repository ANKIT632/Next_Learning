'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

function Page() {

    const [product,setProdeuct]=useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( ()=>{
        async function data(){

    let data= await fetch('https://dummyjson.com/products');

        data=await data.json();
    
        console.log(data.products);
    setProdeuct(data.products);
        } data();
    },[]);

  return (
    <>
    <h2>Product List</h2>
    <div>
    {
        product.map((item)=>{
        return <h4 key={item.id} style={{color:'skyblue'}}>Name : {item.title}</h4>
        })
        
    }
        
    </div>

    <Link href='/'>Home</Link>
    </>
  ) 
}

export default Page