import { NextPage } from "next";
import Head from "next/head";
import HomePage from "../templates/HomePage/HomePageTemp";
import { fetchHome } from "@/templates/Api/MyController";
// import { fetchDw } from "@/templates/Api/MyController";

const Index: NextPage = (props:any) => {

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <HomePage {...props} />
    </>
  );
};

export default Index;

export async function getServerSideProps({ req }: any) {
  try {
    const url = new URL(`http://${req.headers.host}`);
    const host = url.hostname;
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpc2tvbWluZm8uZHdAZGVwb2suZ28uaWQiLCJleHAiOjE2OTg3NTg5NDF9.nqadh7NfSsiopMxgpFDUYQDbVXy2huR05J7FRqNKfQ8';

    // Fetch data using fetchDw and fetchHome with the token
    // const dwData = await fetchDw(host, token); // Include the token here
    // console.log(dwData);
    const res = await fetchHome(host);

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
      client: res.client
    };

    // Check if totalPenduduk is available in dwData before adding it to props
    // if (dwData && dwData.totalPenduduk) {
    //   propsData.totalPenduduk = dwData.totalPenduduk;
    // }

    return {
      props: propsData
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {} // Return empty props or handle the error as needed
    };
  }
}


// import { NextPage } from "next";
// import Head from "next/head";
// import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
// import { fetchLanding } from "@/templates/Api/MyController";

// const Index: NextPage = ( props: any ) => {
//   return (
//     <>
//       <Head>
//         <title>Portal Diskominfo</title>
//         <meta name="description" content="Portal Kecamatan Kota Depok" />
//       </Head>
//       <LandingPageTemplate {...props} />
//     </>
//   );
// };

// export default Index;

// export async function getServerSideProps({ req }: any) {
//   const url = new URL(`http://${req.headers.host}`);
//   const host = url.hostname;

//   const res = await fetchLanding(host);
//   return {
//       props: {
//           domain: res.domain,
//           profilSite: res.profilSite,
//           exLink: res.exLink,
//           layanan: res.layanan
//       }
//   }
// }