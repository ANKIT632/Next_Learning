import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/Models/productSchema";

export async function GET(){
    let data=[];
  try{
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    data= await Product.find();
     
    return NextResponse.json({results:data,success:true},{status:200});

  }
  catch{
    return NextResponse.json({success:false})
  }

}


// add data in database
export async function POST(request){
  let results;

  const payload=await request.json();
  try{
    await mongoose.connect("mongodb://localhost:27017/e-comm");

    let product =new Product(payload);

   results=await product.save();

   return  NextResponse.json({results,success:true},{status:200});
  }

  catch{
  return  NextResponse.json({message:"data is not posted yet!",success:false},{status:401})
  }


 
  
}