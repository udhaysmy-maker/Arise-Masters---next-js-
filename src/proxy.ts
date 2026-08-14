import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site-wide maintenance mode. Set NEXT_PUBLIC_MAINTENANCE_MODE=true in the
// Vercel project's environment variables (Production, or any target
// environment) to show the maintenance page on every public route. Leave
// unset or "false" for the site to behave exactly as it does today.
export function proxy(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Run on every route except: API routes, Next internals, the public
    // asset/gallery *files* (so images keep loading on the maintenance
    // page itself and, when maintenance mode is off, on the real Gallery
    // page — note "gallery/" has a trailing slash so the /gallery page
    // route itself is still maintenance-gated, only /gallery/*.jpeg is
    // exempt), metadata files, and /maintenance (avoid re-rewriting).
    "/((?!api|_next/static|_next/image|assets|gallery/|maintenance|favicon.ico|icon.png|robots.txt|sitemap.xml).*)",
  ],
};
