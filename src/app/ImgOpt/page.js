import React from 'react'
import Image from 'next/image';
import Photo from '../../../public/image.jpg'
import {Anek_Latin} from 'next/font/google';

// add font and image optimiztion.

const anta=Anek_Latin({
  weight:'400',
  subsets:['latin']});

export default function Page() {
  return (
    <div>

        <h4 className={anta.className}>Image Optmizer</h4>
        <Image src={Photo} alt='img'
          width={500}
        height={300} />
 
    </div>
  )
}


export  function generateMetadata(){
  
  return{
    title:'Image optimizer',
     description:'image opt des'
  }

}