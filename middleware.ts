import { NextResponse, type NextRequest } from "next/server";

const USER = process.env.ADMIN_USER || "admin";
const PASS = process.env.ADMIN_PASS || "changeme";

function unauthorized() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isProtectedApi =
    (pathname.startsWith("/api/events") || pathname.startsWith("/api/projects")) &&
    request.method !== "GET";

  if (!isAdminRoute && !isProtectedApi) {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return unauthorized();
  }

  const decoded = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [user, pass] = decoded.split(":");

  if (user !== USER || pass !== PASS) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/events/:path*", "/api/projects/:path*"],
};
