import { NextResponse } from "next/server";

import {user} from '@/utils/db'


export async function GET(request){
    return NextResponse.json(user);
}