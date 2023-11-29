import { fetchMottoPelayanan } from "@/templates/Api/MyController";
import MottoPelayanan from "@/templates/ProfilePage/MottoPelayanan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
  return (
    <>
      <Head>
        <title>Motto Pelayanan</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <MottoPelayanan {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchMottoPelayanan(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          motto: res.motto
      }
  }
}