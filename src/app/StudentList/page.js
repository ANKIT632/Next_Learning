import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
    <p>Dynamic Routing </p>
    <ul>
    <li>
     <Link href='StudentList/sam'>sam</Link><hr/></li>
     <li>
     <Link href='StudentList/tom'>tom</Link><hr/></li>
     
     <li>
     <Link href='StudentList/lisa'>lisa</Link></li>
     </ul>

     <p>Dynamic Routing with multiple segment</p>

     <ul>
    <li>
     <Link href='StudentList/sam/21/4'>sam Details</Link><hr/></li>
     <li>
     <Link href='StudentList/tom/2/5'>tom Details</Link><hr/></li>
     
     <li>
     <Link href='StudentList/lisa/25/3'>lisa Details</Link></li>
     </ul>
    </div>
  )
}
