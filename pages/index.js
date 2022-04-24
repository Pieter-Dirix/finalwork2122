import Head from 'next/head'
import RegisterForm from '../components/index/LoginRegisterForm';
import clientPromise from '../lib/mongodb'
import HomePage from "../components/index/Home";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getSession} from "next-auth/react";

export default function Home({ isConnected }) {

  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      console.log("hier");
      if(session) {
        setIsLoggedIn(true)
      }
    })
  })

  let firstComponent = isLoggedIn? <HomePage/> : <RegisterForm/>


  return (
    <div className="container">
      <Head>
        <title>Final Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {firstComponent}


      {/*<style jsx global>{`*/}
      {/*  html,*/}
      {/*  body {*/}
      {/*    padding: 0;*/}
      {/*    margin: 0;*/}
      {/*    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,*/}
      {/*      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,*/}
      {/*      sans-serif;*/}
      {/*  }*/}

      {/*  * {*/}
      {/*    box-sizing: border-box;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
