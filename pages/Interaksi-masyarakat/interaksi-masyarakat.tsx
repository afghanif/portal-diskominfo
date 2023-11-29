import InteraksiMasyarakat from "@/templates/InteraksiMasyarakat/InteraksiMasyarakat";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Infografis</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <InteraksiMasyarakat />
    </>
  )
}

export default Index;