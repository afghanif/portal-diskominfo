import { fetchFaq } from "@/templates/Api/MyController";
import Faq from "@/templates/Layanan/Faq";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props:any ) => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <Faq {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchFaq(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          faq: res.faq
      }
  }
}