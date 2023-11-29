import { fetchInformasiBerkala } from "@/templates/Api/MyController";
import InformasiBerkala from "@/templates/InformasiPublik/InformasiBerkala";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
  return (
    <>
      <Head>
        <title>Informasi</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <InformasiBerkala {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchInformasiBerkala(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          berkala: res.berkala,
          // Judul_A_berkala: res.Judul_A_berkala,
          // Judul_B_berkala: res.Judul_B_berkala,
          // Judul_C_berkala: res.Judul_C_berkala,
          // Judul_D_berkala: res.Judul_D_berkala,
          // Judul_E_berkala: res.Judul_E_berkala,
          // Judul_F_berkala: res.Judul_F_berkala,
          // Judul_G_berkala: res.Judul_G_berkala,
          // Judul_H_berkala: res.Judul_H_berkala,
          // Judul_I_berkala: res.Judul_I_berkala,
          // Judul_J_berkala: res.Judul_J_berkala,
          // Judul_K_berkala: res.Judul_K_berkala,
          // Judul_L_berkala: res.Judul_L_berkala,
          // Judul_M_berkala: res.Judul_M_berkala,
          // A_berkala: res.A_berkala,
          // B_berkala: res.B_berkala,
          // C_berkala: res.C_berkala,
          // D_berkala: res.D_berkala,
          // E_berkala: res.E_berkala,
          // F_berkala: res.F_berkala,
          // G_berkala: res.G_berkala,
          // H_berkala: res.H_berkala,
          // I_berkala: res.I_berkala,
          // J_berkala: res.J_berkala,
          // K_berkala: res.K_berkala,
          // L_berkala: res.L_berkala,
          // M_berkala: res.M_berkala
      }
  }
}