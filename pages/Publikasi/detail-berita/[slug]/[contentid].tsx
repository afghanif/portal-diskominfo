import { fetchDetailBerita } from "@/templates/Api/MyController";
import DetailBerita from "@/templates/Publikasi/DetailBerita";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {
    // return JSON.stringify(props);
  return (
    <>
      <Head>
        <title>Detail Berita</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <DetailBerita {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req, query }: any) {
  const { slug, contentid } = query;
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchDetailBerita(host, slug);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          berita: res.berita,
          beritaPopuler: res.beritaPopuler
      }
  }
}