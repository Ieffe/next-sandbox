import { NextResponse } from 'next/server';
import Cookies from 'js-cookie'


export function middleware(req){
    console.log('Middleware is working!')
    const token = Cookies.get('token')
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