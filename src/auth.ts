import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { fetchAuth } from './app/_lib/fetchAuth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        id: { type: 'text' },
        password: { type: 'text' },
      },
      authorize: async (credentials) => {
        const data = await fetchAuth('signInWithPassword', credentials.id, credentials.password);
        if (data) {
          console.log(data);
          // Return the full user object or necessary data
          return { email: data.email, token: data.idToken};
        }
        return null;
      },
      
    }),
  ],
  callbacks: {
    jwt({token}) {
      return token;
    },
    session({ session}) {
      // console.log('auth.ts session', session, newSession, user);
      return session;
    }
  },
},
);
