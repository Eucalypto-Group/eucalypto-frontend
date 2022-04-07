import { collection, getDocs, getFirestore } from "firebase/firestore";
// import type { NextPage } from 'next';
import Head from "next/head";
import { useEffect } from "react";
import { array } from "yargs";
import iniApp from "../src/app/db";

const data = process.env.API_KEY;

const Home = (props: any) => {
  const { dbResponse } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
        {dbResponse.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p>{item.titulo}</p>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export async function getStaticProps() {
  let dbResponse: Array<any> = Array();
  const db = getFirestore(iniApp);
  const querySnapshot = await getDocs(collection(db, "test"));
  querySnapshot.forEach((doc) => {
    dbResponse.push(doc.data());
    console.log(doc.data());
  });

  return {
    props: {
      dbResponse,
    },
  };
}

export default Home;
