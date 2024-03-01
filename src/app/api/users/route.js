import { NextResponse } from "next/server";

import {user} from '@/utils/db'

//get
export async function GET(request){
    return NextResponse.json(user);
}


//post
export async function POST(req){
  const data=await req.json();
 
  if(!data.name || !data.email){
    return NextResponse.json({mess:'Data not found',success:false},{status:400}); 
  }
  return NextResponse.json({mess:'data added',success:true},{status:201});
    
}


//201 use for create data.