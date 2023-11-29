import { fetchLayananKota } from "@/templates/Api/MyController";
import LayananKota from "@/templates/Layanan/LayananKota";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <LayananKota {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchLayananKota(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          layananKota: res.layananKota
      }
  }
}
