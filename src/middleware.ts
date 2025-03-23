import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN, ROUTER } from "@/constants";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

  const protectedRoutes = ["/posts"];

  if (protectedRoutes.includes(request.nextUrl.pathname) && !accessToken) {
    return NextResponse.redirect(new URL(ROUTER.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/posts/:path*"]
};
