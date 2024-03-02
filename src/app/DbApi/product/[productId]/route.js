import { Product } from "@/Models/productSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(request,urlId){
 try{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
   
    let payload=await request.json();
    let id={_id:urlId.params.productId};
    
    const result=await Product.findOneAndUpdate(id,payload);

    return NextResponse.json({result,success:true},{status:200});
 }

 catch{
    return NextResponse.json({success:false},{status:404});
 }
    
}

export async function DELETE(req,content){

    try{
 let id={_id:content.params.productId};

 
 await mongoose.connect("mongodb://localhost:27017/e-comm");

 const res=await Product.deleteOne(id);

 return NextResponse.json({res,success:true},{status:200});
    }

    catch{
        return NextResponse.json({success:false},{status:501});
    }
 
}