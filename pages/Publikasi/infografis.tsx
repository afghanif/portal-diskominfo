import { fetchGaleri } from "@/templates/Api/MyController";
import InfografisTemp from "@/templates/Publikasi/InfografisTemp";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Infografis</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <InfografisTemp {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchGaleri(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          galeri: res.galeri,
          video: res.video
      }
  }
}