import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

    if (!token && !isAuthPage) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    if (isAuthPage && token) {
      return NextResponse.redirect(new URL("/dash", req.url));
    }

    return null;
  },
  {
    callbacks: {
      authorized: async () => {
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/auth", "/dash", "/create", "/poll/:path*"],
};
