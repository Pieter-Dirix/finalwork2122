// https://dev.to/dawnind/authentication-with-credentials-using-next-auth-and-mongodb-part-1-m38

import { hash } from 'bcryptjs';
import clientPromise from "../../../lib/mongodb";

export default async function handler(req,res) {

    if(req.method === 'POST') {
        console.log("hier");
        const { firstName, lastName, email, password} = req.body;

        if(!email || !email.includes("@") || !password) {
            res.status(422).json({ message: "Invalid Data"});
        }

        const client = await clientPromise;
        const db = client.db("finalwork2122");

        const checkExisting = await db
            .collection('users')
            .findOne({ email: email});

        if (checkExisting) {
            res.status(422).json({ message: 'User already exists'});
            await client.close();
        }

        const status = await db.collection('users').insertOne({
            firstName,
            lastName,
            email,
            password: await hash(password, 12),
        });

        res.status(201).json({ message: 'User created', ...status});
        client.close();
    } else {
        res.status(500).json({message: 'Route not valid'});
    }
}