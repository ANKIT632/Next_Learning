import Link from "next/link";

const Page=({params})=>{
return(
    <>
    <h4>Name : {params.Student}</h4>

    <Link href='/StudentList'>back</Link>
    </>
)
}

export default Page;