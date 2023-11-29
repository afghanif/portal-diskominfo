import { fetchJenisLayanan } from "@/templates/Api/MyController";
import JenisLayanan from "@/templates/Layanan/JenisLayanan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
  return (
    <>
      <Head>
        <title>Jenis Layanan</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <JenisLayanan {...props}/>
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchJenisLayanan(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          layanan: res.layanan
      }
  }
}