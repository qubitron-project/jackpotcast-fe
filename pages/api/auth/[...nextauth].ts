import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { USERS_LIST } from '../config';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
type NextAuthOptionsCallback = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuthOptions;
import { useCookies } from 'react-cookie';

const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
  // pages: {
  //   signIn: "/signup",
  // },
  return {
    debug: true,
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            scope:
              'openid email profile https://www.googleapis.com/auth/youtube.force-ssl',
          },
        },
      }),

      // CredentialsProvider({
      //   name: "Credentials",
      //   credentials: {
      //     email: {
      //       label: "Email",
      //       type: "email",
      //       placeholder: "jsmith@mail.com",
      //     },
      //     password: { label: "Password", type: "password" },
      //   },
      //   async authorize(credentials, req) {
      //     try {
      //       const res = await fetch(
      //         `${process.env.NEXT_PUBLIC_BE_ROUTE}/auth/signin`,
      //         {
      //           method: "POST",
      //           headers: { "Content-Type": "application/json" },
      //           body: JSON.stringify({
      //             email: credentials?.email,
      //             password: credentials?.password,
      //           }),
      //         }
      //       );

      //       const user = await res.json();

      //       if (res.ok && user) {
      //         return user;
      //       } else if (user.error) {
      //         throw new Error(user.error);
      //       } else {
      //         throw new Error("Login failed.");
      //       }
      //     } catch (error: any) {
      //       throw new Error(error.message);
      //     }
      //   },
      // }),
    ],
    callbacks: {
      async signIn({ profile, account, email, credentials }) {
        setCookie('key', 'value');
        console.log(
          'profile=>',
          profile,
          profile?.picture,
          account?.access_token
        );

        try {
          console.log('Login through our DB');
          await fetch(`${USERS_LIST}/signup`, {
            method: 'POST',
            body: JSON.stringify({
              name: profile?.name,
              email: profile?.email,
              image: profile?.picture,
              google_token: account?.access_token,
            }),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
              if (response.MESSAGE) {
                console.log(response.MESSAGE);
                console.log('response.auth_token:', response.auth_token);
                console.log('잭팟캐스트에 오신 것을 환영합니다.');
                res.setHeader('Set-Cookie', [
                  'token=' + response.auth_token + '; path=/;',
                ]);
              } else {
                deleteCookie('token');
                console.log('로그인 연동에 실패했습니다.');
              }
            });

          return true;
        } catch (err) {
          console.log(err);
          return false;
        }

        // if user registered in our database then return true

        // else return false
      },
      // async redirect({ url, baseUrl }) {
      //   return '/signup';
      // },
      // async session({ session, token, user }) {
      //   session.user = user;
      //   console.log('User!', user);
      //   return session;
      // },
      async session({ session, token, user }) {
        return session;
      },
      async jwt({ token, user, account, profile }) {
        if (account?.access_token) {
          token.access_token = account.access_token;
        }
        return token;
      },
    },
    secret: process.env.JWT_SECRET,
    session: {
      strategy: 'jwt',
    },
    events: {
      async signOut({ token }) {
        res.setHeader('Set-Cookie', [
          'Authentication=deleted;Max-Age=0;path=/;',
          'Refresh=deleted;Max-Age=0;path=/;',
        ]);
      },
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
