import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Définir les routes publiques
const isPublicRoute = createRouteMatcher([
  '/',
/*   '/api/clerk-webhook',
  '/api/drive-activity/notification',
  '/api/payment/success', */
]);

// Définir les routes ignorées
const ignoredRoutes = [
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait',
];

export default clerkMiddleware((auth, req) => {
  if (ignoredRoutes.some(route => req.url.startsWith(route))) {
    return;
  }
  if (!isPublicRoute(req)) {
    auth();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};