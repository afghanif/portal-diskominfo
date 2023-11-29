import { fetchListStandarPelayanan } from "@/templates/Api/MyController";
import ListStandarLayanan from "@/templates/Layanan/ListStandarLayanan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any) => {
  return (
    <>
      <Head>
        <title>Standar Layanan</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <ListStandarLayanan {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchListStandarPelayanan(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          listStandarPelayanan: res.listStandarPelayanan
      }
  }
}