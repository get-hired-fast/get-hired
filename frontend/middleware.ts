import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/profile(.*)", "/opportunities(.*)"])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) (await auth())
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
