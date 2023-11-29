import { NextPage } from "next";
import Head from "next/head";
import TentangKami from "../../templates/ProfilePage/TentangKami";
import { fetchProfil, kepegawaianDw } from "@/templates/Api/MyController";

const Index: NextPage = (props:any) => {

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <TentangKami {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchProfil(host);
  const dataKepegawaian = await kepegawaianDw();
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          image: res.image,
          tugasPokok: res.tugasPokok,
          landasanHukum: res.landasanHukum,
          dataKepegawaian : dataKepegawaian
      }
  }
}
