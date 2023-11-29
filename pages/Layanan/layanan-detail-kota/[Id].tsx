import { NextPage } from "next";
import Head from "next/head";
import { fetchDetailLayananKota } from "@/templates/Api/MyController";
import SubLayananKota from "@/templates/Layanan/SubLayananKota";

const Index: NextPage = (props:any) => {

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <SubLayananKota {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req, query }: any) {
  const { Id } = query;
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchDetailLayananKota(host, Id);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          layananKota: res.layananKota
      }
  }
}
