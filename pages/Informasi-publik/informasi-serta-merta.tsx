import { fetchInformasiSertaMerta } from "@/templates/Api/MyController";
import InformasiSertaMerta from "@/templates/InformasiPublik/InformasiSertaMerta";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
  return (
    <>
      <Head>
        <title>Informasi</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <InformasiSertaMerta {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchInformasiSertaMerta(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          sertaMerta: res.sertaMerta
      }
  }
}