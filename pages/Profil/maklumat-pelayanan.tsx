import { fetchMaklumatPelayanan } from "@/templates/Api/MyController";
import MaklumatPelayanan from "@/templates/ProfilePage/MaklumatPelayanan";

import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
    return (
        <>
          <Head>
            <title>Maklumat Pelayanan</title>
            <meta name="description" content="Portal Kecamatan Kota Depok" />
          </Head>
          <MaklumatPelayanan {...props} />
        </>
    )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchMaklumatPelayanan(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          maklumat: res.maklumat
      }
  }
}