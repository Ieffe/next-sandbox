import { NextResponse } from 'next/server';


export function middleware(req){
    console.log('Middleware is working!')
    const res = req.cookies.get('token')?.value
    const token = JSON.parse(res).token
    console.log(token ? token : 'No token for now!')
    if(!token){
        return NextResponse.redirect(new URL('/protected', req.url))
    } else {
        return NextResponse.next()
    }
}


export const config = {
    matcher: '/protected/dashboard/:path*'
}