import { NextPage } from "next";
import Head from "next/head";
import HomePage from "../templates/HomePage/HomePageTemp";
import { fetchHome, kepegawaianDw } from "@/templates/Api/MyController";

const Index: NextPage = (props:any) => {

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
        {/* <script type="text/javascript" src="https://widget.kominfo.go.id/gpr-widget-kominfo.min.js"></script> */}
      </Head>
      <HomePage {...props} />
    </>
  );
};

export default Index;

export async function getServerSideProps({ req }: any) {

  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchHome(host);
  const getKepegawaian = await kepegawaianDw() 
  // Prepare the data to be passed as props
  const propsData: any = {
    domain: res.domain,
    profilSite: res.profilSite,
    exLink: res.exLink,
    // visit: res.visit,
    slider: res.slider,
    galeriKegiatan: res.galeriKegiatan,
    pengumuman: res.pengumuman,
    dokumen: res.dokumen,
    potensi: res.potensi,
    agenda: res.agenda,
    layanan: res.layanan,
    layananKota: res.layananKota,
    hargaKomoditas: res.hargaKomoditas,
    beritaKota: res.beritaKota,
    channel: res.channel,
    berita: res.berita,
    client: res.client,
    // getCuaca : getCuaca,
    getKepegawaian : getKepegawaian,
    // getPrayer : getPrayer
  };

  return {
    props: propsData
  };

}

// export async function getServerSideProps({ req }: any) {
//     const url = new URL(`http://${req.headers.host}`);
//     const host = url.hostname;

//     // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpc2tvbWluZm8uZHdAZGVwb2suZ28uaWQiLCJleHAiOjE2OTk3NjY4OTl9.Rtup8lmr9DTuzZIk9I_CiMcNqyGeXc-V-wuNqMgpYyM';


//     const res = await fetchHome(host);
//     const getCuaca = await fetchWeather();
//     const getKepegawaian = await kepegawaianDw() 
//     // const getKepegawaian = await fetc() 

//     // const getPrayer = await fetchPrayerTime() 

//     // Prepare the data to be passed as props
//     const propsData: any = {
//       domain: res.domain,
//       profilSite: res.profilSite,
//       exLink: res.exLink,
//       // visit: res.visit,
//       slider: res.slider,
//       galeriKegiatan: res.galeriKegiatan,
//       pengumuman: res.pengumuman,
//       dokumen: res.dokumen,
//       potensi: res.potensi,
//       agenda: res.agenda,
//       layanan: res.layanan,
//       layananKota: res.layananKota,
//       hargaKomoditas: res.hargaKomoditas,
//       beritaKota: res.beritaKota,
//       channel: res.channel,
//       berita: res.berita,
//       client: res.client,
//       // getCuaca : getCuaca,
//       getKepegawaian : getKepegawaian,
//       // getPrayer : getPrayer
//     };

//     return {
//       props: propsData
//     };
//   }

// function fetchWeather() {
//   throw new Error("Function not implemented.");
// }

