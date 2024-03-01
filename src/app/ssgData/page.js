
import Link from 'next/link';
import getData from '../../service/getUser'
import Delete from '@/Component/deleteData'

export default async function Page() {
    let data =  await getData();
  
    return (

        <> 
         {data.map((user) => ( <div key={user.id}>
         <Link href={`/ssgData/${user.id}`}> {user.name}</Link> 
          
         <Link href={`/ssgData/${user.id}/update`}><p>[update]</p></Link>

        <Delete id={user.id}/>

         <hr/>
        </div> ))}
        </>

    )
}

