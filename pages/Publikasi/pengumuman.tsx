import { fetchPengumuman } from "@/templates/Api/MyController";
import PengumumanTemp from "@/templates/Publikasi/PengumumanTemp";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Pengumuman</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <PengumumanTemp {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchPengumuman(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          pengumuman: res.pengumuman,
          categories: res.categories
      }
  }
}