import { fetchBerita } from "@/templates/Api/MyController";
import BeritaTemp from "@/templates/Publikasi/BeritaTemp";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Berita</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <BeritaTemp {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchBerita(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          berita: res.berita,
          categories: res.categories
      }
  }
}