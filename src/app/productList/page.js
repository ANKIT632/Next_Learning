

import Link from "next/link";

// server component

async function getData(){
    try{
       let data= await fetch('https://dummyjson.com/products');
   
           data=await data.json();
      
       return data.products;
   
   
           }
           
           catch{
               console.log('not data fetch')
           }  
       }



async function  Page() {

   
  let product=await getData();

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