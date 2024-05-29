
import { ClerkMiddlewareOptions, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define a custom type that extends ClerkMiddlewareOptions with the publicRoutes property
interface CustomClerkMiddlewareOptions extends ClerkMiddlewareOptions {
  publicRoutes?: string[];
}

// Use the custom type for clerkMiddleware options
export default clerkMiddleware({
  publicRoutes: ["api/webhooks/clerk, '/api/webhooks/stripe"]
} as CustomClerkMiddlewareOptions);


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};