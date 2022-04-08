import { collection, getDocs, getFirestore } from "firebase/firestore";
// import type { NextPage } from 'next';
import Head from "next/head";
import { useEffect } from "react";
import { array } from "yargs";
import iniApp from "../src/app/db";
import Hero from "../src/components/Home/Hero/Hero";
import Reviews from "../src/components/Home/Reviews/Reviews";
import ScrollSteps from "../src/components/Home/ScrollSteps/ScrollSteps";

const data = process.env.API_KEY;

const Home = (props: any) => {
  const { dbResponse } = props;

  return (
    <div>
      <Hero />
      <Reviews />
      <ScrollSteps />
      <h1 className="text-3xl font-bold underline text-primary bg-secondary">
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
