import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import HomeBanner from "@/components/homeBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Mission To Mars</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" />
      </Head>
      <HomeBanner data={props.data}  />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=20"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 604800,
  };
}