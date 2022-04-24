import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from "../../../lib/mongodb";
import { compare } from 'bcryptjs';

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = clientPromise;
                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({
                    email: credentials.email,
                });

                if(!user) {
                    client.close()
                    throw new Error('No user found!');
                }

                const isValid = await compare(credentials.password, user.password);

                if(!isValid) {
                    client.close();
                    throw new Error('Could not log you in!')
                }

                client.close();
                return { user: user}

            }
        })
    ]
})