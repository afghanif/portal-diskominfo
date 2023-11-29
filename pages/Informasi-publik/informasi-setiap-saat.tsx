import { fetchInformasiSetiapSaat } from "@/templates/Api/MyController";
import InformasiSetiapSaat from "@/templates/InformasiPublik/InformasiSetiapSaat";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = ( props: any ) => {
  return (
    <>
      <Head>
        <title>Informasi</title>
        <meta name="description" content="Portal Kecamatan Kota Depok" />
      </Head>
      <InformasiSetiapSaat {...props} />
    </>
  )
}

export default Index;

export async function getServerSideProps({ req }: any) {
  const url = new URL(`http://${req.headers.host}`);
  const host = url.hostname;

  const res = await fetchInformasiSetiapSaat(host);
  return {
      props: {
          domain: res.domain,
          profilSite: res.profilSite,
          exLink: res.exLink,
          setiapSaat: res.setiapSaat,
          // Judul_A_setiapSaat: res.Judul_A_setiapSaat,
          // Judul_B_setiapSaat: res.Judul_B_setiapSaat,
          // Judul_C_setiapSaat: res.Judul_C_setiapSaat,
          // Judul_D_setiapSaat: res.Judul_D_setiapSaat,
          // Judul_E_setiapSaat: res.Judul_E_setiapSaat,
          // Judul_F_setiapSaat: res.Judul_F_setiapSaat,
          // Judul_G_setiapSaat: res.Judul_G_setiapSaat,
          // Judul_H_setiapSaat: res.Judul_H_setiapSaat,
          // Judul_I_setiapSaat: res.Judul_I_setiapSaat,
          // Judul_J_setiapSaat: res.Judul_J_setiapSaat,
          // Judul_K_setiapSaat: res.Judul_K_setiapSaat,
          // Judul_L_setiapSaat: res.Judul_L_setiapSaat,
          // Judul_M_setiapSaat: res.Judul_M_setiapSaat,
          // Judul_N_setiapSaat: res.Judul_N_setiapSaat,
          // Judul_O_setiapSaat: res.Judul_O_setiapSaat,
          // Judul_P_setiapSaat: res.Judul_P_setiapSaat,
          // Judul_Q_setiapSaat: res.Judul_Q_setiapSaat,
          // A_setiapSaat: res.A_setiapSaat,
          // B_setiapSaat: res.B_setiapSaat,
          // C_setiapSaat: res.C_setiapSaat,
          // D_setiapSaat: res.D_setiapSaat,
          // E_setiapSaat: res.E_setiapSaat,
          // F_setiapSaat: res.F_setiapSaat,
          // G_setiapSaat: res.G_setiapSaat,
          // H_setiapSaat: res.H_setiapSaat,
          // I_setiapSaat: res.I_setiapSaat,
          // J_setiapSaat: res.J_setiapSaat,
          // K_setiapSaat: res.K_setiapSaat,
          // L_setiapSaat: res.L_setiapSaat,
          // M_setiapSaat: res.M_setiapSaat,
          // N_setiapSaat: res.N_setiapSaat,
          // O_setiapSaat: res.O_setiapSaat,
          // P_setiapSaat: res.P_setiapSaat,
          // Q_setiapSaat: res.Q_setiapSaat,
      }
  }
}