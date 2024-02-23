'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';



function About() {

  
  const Router=useRouter();
  
  return (
    <div>
    <Link href='/about/aboutStu'>go to student about</Link>
    <br/>
    <Link href='/about/aboutTeach'>go to teacher About</Link>

<br/>
    <button onClick={()=>Router.push('/')}>Home</button>


    </div>
  )
}

export default About;