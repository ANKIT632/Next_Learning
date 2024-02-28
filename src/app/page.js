'use client'


import style from './style.module.css';

import { useRouter } from "next/navigation";

export default function Home() {

   const route=useRouter();
  return (
    <main >
      

      <button className={style.main} onClick={()=>route.push('/about')}>about</button>
      
      <hr/>
      <button onClick={()=>route.push('/StudentList')}>Student List</button>

      <hr/>
      <button onClick={()=>route.push('/productList')}>productList</button>

      <hr/>
      <button onClick={()=>route.push('/envSetup')}>env</button>

    </main>
  );
}
 