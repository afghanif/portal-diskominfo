import { fetchPotensi } from "@/templates/Api/MyController";
import PotensiUnggulan from "@/templates/Publikasi/PotensiUnggulan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Potensi Unggulan</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <PotensiUnggulan {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchPotensi(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          potensi: res.potensi
      }
  }
}