import { NextResponse } from "next/server";

import { user } from '@/utils/db'


export async function GET(req, id) {

    const data = user.filter((item) => item.id == id.params.userId);

    return NextResponse.json(data.length>0? {results:data,success:true} : { results: 'not found data', success: false }, { status: 200 });
}