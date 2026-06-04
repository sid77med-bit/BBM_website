import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/fr";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/"
};
