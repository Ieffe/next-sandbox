import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("Middleware is working!");
  const res = req.cookies.get("token")?.value;
  console.log(
    res
      ? "Logged in as " +
          JSON.parse(res).firstName +
          " " +
          JSON.parse(res).lastName
      : "No one logged for now!"
  );
  if (!res) {
    return NextResponse.redirect(new URL("/protected", req.url));
  } else {
    // const token = JSON.parse(res).token
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/protected/dashboard/:path*",
};
