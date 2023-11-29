import { fetchAgenda } from "@/templates/Api/MyController";
import AgendaKegiatan from "@/templates/Publikasi/AgendaKegiatan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Agenda Kegiatan</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <AgendaKegiatan {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchAgenda(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          agenda: res.agenda
      }
  }
}