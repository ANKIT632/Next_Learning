import Link from 'next/link';
import getData from '../../service/getUser'


export default async function Page() {
    let data =  await getData();
  
    return (

        <> 
         {data.map((user) => ( <div key={user.id}>
         <Link href={`/ssgData/${user.id}`}> {user.name}</Link>
         <hr/>
        </div> ))}
        </>

    )
}

