import { fetchKontak } from "@/templates/Api/MyController";
import KontakTemp from "@/templates/Hubungi/KontakTemp";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Kontak</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <KontakTemp {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchKontak(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          kontak: res.kontak
      }
  }
}