import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    subscribed: boolean;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
