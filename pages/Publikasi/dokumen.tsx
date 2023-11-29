import { fetchDokumen } from "@/templates/Api/MyController";
import DokumenTemp from "@/templates/Publikasi/DokumenTemp";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Infografis</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <DokumenTemp {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchDokumen(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          dokumen: res.dokumen
      }
  }
}