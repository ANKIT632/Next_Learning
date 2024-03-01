import { NextResponse } from "next/server";

import { user } from '@/utils/db'


// get single data
export async function GET(req, id) {

    const data = user.filter((item) => item.id == id.params.userId);

    return NextResponse.json(data.length>0? {results:data,success:true} : { results: 'not found data', success: false }, { status: 200 });
}

// update single data.

export async function PUT(req,id){
  let payload=await req.json();

  payload.id=id.params.userId;



  if(!payload.name || !payload.email){
    return NextResponse.json({mess:'Data not found',success:false},{status:400}); 
  }

  return NextResponse.json({mess:'data is updated',success:true},{status:200});
    
}


// Delete data 

export async function DELETE(req,param){

    console.log(param);
    return NextResponse.json({results:'delete success',success:true},{status:200})

}