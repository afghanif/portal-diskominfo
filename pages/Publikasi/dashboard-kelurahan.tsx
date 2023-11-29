import DashboardKelurahan from "@/templates/Publikasi/DashboardKelurahan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <DashboardKelurahan />
    </>
  )
}

export default Index;