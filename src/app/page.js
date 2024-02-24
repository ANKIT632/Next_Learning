'use client'

import { useRouter } from "next/navigation";

export default function Home() {

   const route=useRouter();
  return (
    <main >
      <button onClick={()=>route.push('/about')}>about</button>
      
      <hr/>
      <button onClick={()=>route.push('/StudentList')}>Student List</button>

      <hr/>
      <button onClick={()=>route.push('/productList')}>productList</button>


    </main>
  );
}
 