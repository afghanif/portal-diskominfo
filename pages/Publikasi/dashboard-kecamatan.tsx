import { fetchChartKepegawaian, fetchChartKependudukan, fetchChartKesehatan, fetchChartPenyakit, fetchHome } from "@/templates/Api/MyController";
import DashboardKecamatan from "@/templates/Publikasi/DashboardKecamatan";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <DashboardKecamatan {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({req}:any){
    
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchHome(host);
  const getKependudukan = await fetchChartKependudukan()
  const getKepegawaian = await fetchChartKepegawaian()
  const getKesehatan = await fetchChartKesehatan()
  const getPenyakit = await fetchChartPenyakit()
  
  return {
    props: {
        domain: res.domain,
        profilSite: res.profilSite,
        exLink: res.exLink,
        // visit: res.visit,
        chartKependudukan: getKependudukan,
        chartKepegawaian: getKepegawaian,
        chartKesehatan: getKesehatan,
        chartPenyakit: getPenyakit,
    }
  }
}