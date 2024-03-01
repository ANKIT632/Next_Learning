'use client'
function DeleteData(props) {

   const  handleDelete =async()=>{
      let response=await fetch(`http://localhost:3000/api/users/${props.id}`,{
        method:"delete"
      });

      // response=await response.json();
      console.log(response);
   }
 
  return (
    <div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteData;


// we can not apply async /await  await in client function.