import React from 'react'
import { NextResponse  } from 'next/server'

export function middleware(request) {
  if(request.nextUrl.pathname==='/about/aboutStu'){
    return NextResponse.redirect(new URL('/StudentList',request.url));
  }
}

// if not use if statement then bydefault redirect to studentList by matcher path.

// export const config={
//     matcher:['/about/:path*','stud/:path*']
// }