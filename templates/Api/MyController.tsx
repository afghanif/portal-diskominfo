import cache from 'memory-cache';
import { transformArray } from '../components/site';
import { ChartBuilder } from '../components/ChartBuilder';
const CACHE_DURATION = 15000;

export async function fetchData(host:any) {
  if(!host) {
    host = 'cimanggis.depok.go.id';
  }
  host = 'cimanggis.depok.go.id';

  // cache.clear();
  const cachedData = cache.get('apiData');
  if(cachedData){
    return cachedData;
  }

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/domainsite?domain=${host}`);
  const domain = await res.json();
  if(domain.Code == "404 Not Found!"){
    throw new Error("Domain not found!");
  }

  res = await fetch(`https://cms.depok.go.id/ViewPortal/profilsite?siteId=172`);
  var profilSite = await res.json();

  res = await fetch(`https://cms.depok.go.id/ViewPortal/getExLink?siteId=172&code=&groupId=&typeId=EP&limit=&offset=`);
  const exLink = await res.json();
  

  // res = await fetch(`https://cms.depok.go.id/ViewPortal/getPengunjung?siteid=172`);
  // const visit = await res.json();
  
  const data = { domain, profilSite: profilSite[0], exLink};
  // cache.put('apiData', data, CACHE_DURATION);

  return data;
}

export async function fetchLanding(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&kanalType=K010&limit=&offset=&category=820&slug=&key=`);
  textRes = await res.text();
  const layanan = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, layanan };
}

export async function fetchHome(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getSlider?siteId=172&typeId=SL01&status=ST01&fileType=FL02`);
  textRes = await res.text();
  const slider = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://dsw.depok.go.id/index.php/api/slider`);
  textRes = await res.text();
  const galeriKegiatan = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K008&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const pengumuman = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K010&limit=3&offset=&category=1080&=slug=&key=`);
  textRes = await res.text();
  const dokumen = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/getPlace?siteId=172&typeId=&limit=4&offset=`);
  textRes = await res.text();
  const potensi = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/getEvent?siteId=172&type=AG01&limit=`);
  textRes = await res.text();
  const agenda = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&kanalType=K010&limit=4&offset=&category=820&slug=&key=`);
  textRes = await res.text();
  const layanan = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://cms.depok.go.id/ViewPortal/getExLink?siteId=2&code=&groupId=&typeId=LM&limit=&offset=&slug=`);
  textRes = await res.text();
  const layananKota = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://dsw.depok.go.id/api/komoditas/harga_depok`);
  textRes = await res.text();
  const hargaKomoditas = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://berita.depok.go.id/api/v1/berita`);
  textRes = await res.text();
  const beritaKota = textRes != "" ? JSON.parse(textRes) : null;

  res = await fetch(`https://www.depok.go.id/api/youtube`);
  textRes = await res.text();
  const channel = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K001&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const berita = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getExLink?siteId=172&typeId=EP`);
  textRes = await res.text();
  const client = textRes != "" ? JSON.parse(textRes) : null;
  
  return {...cachedData, slider, pengumuman, dokumen, potensi, agenda, layanan, layananKota, hargaKomoditas, beritaKota, channel, berita, client };
}

export async function fetchBerita(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K001&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const berita = textRes != "" ? JSON.parse(textRes) : null;

  const categoryRes = await fetch(`https://cms.depok.go.id/ViewPortal/ContentCategory?siteId=172&status=ST01&kanalType=K001&Id=`);
  const categoryText = await categoryRes.text();
  const categories = categoryText !== '' ? JSON.parse(categoryText) : [];

  return { ...cachedData, berita, categories };
}

export async function fetchDetailBerita(host:any, slug_title: string){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K001&limit=&offset=&category=&slug=${slug_title}&key=`);
  textRes = await res.text();
  const berita = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K001&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const beritaPopuler = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, berita,beritaPopuler };
}

export async function fetchJenisLayanan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&kanalType=K010&limit=&offset=&category=820&slug=&key=`);
  textRes = await res.text();
  const layanan = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, layanan };
}

// export async function fetchInformasiBerkala(host:any){
//   var textRes;
//   const cachedData = await fetchData(host);
//   const { domain } = cachedData;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1102&slug=&key=`);
//   textRes = await res.text();
//   const Judul_A_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1103&slug=&key=`);
//   textRes = await res.text();
//   const Judul_B_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1104&slug=&key=`);
//   textRes = await res.text();
//   const Judul_C_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1105&slug=&key=`);
//   textRes = await res.text();
//   const Judul_D_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1106&slug=&key=`);
//   textRes = await res.text();
//   const Judul_E_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1107&slug=&key=`);
//   textRes = await res.text();
//   const Judul_F_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1108&slug=&key=`);
//   textRes = await res.text();
//   const Judul_G_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1109&slug=&key=`);
//   textRes = await res.text();
//   const Judul_H_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1110&slug=&key=`);
//   textRes = await res.text();
//   const Judul_I_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1111&slug=&key=`);
//   textRes = await res.text();
//   const Judul_J_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1112&slug=&key=`);
//   textRes = await res.text();
//   const Judul_K_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1113&slug=&key=`);
//   textRes = await res.text();
//   const Judul_L_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1114&slug=&key=`);
//   textRes = await res.text();
//   const Judul_M_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1084&slug=&key=`);
//   textRes = await res.text();
//   const A_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1085&slug=&key=`);
//   textRes = await res.text();
//   const B_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1086&slug=&key=`);
//   textRes = await res.text();
//   const C_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1087&slug=&key=`);
//   textRes = await res.text();
//   const D_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1088&slug=&key=`);
//   textRes = await res.text();
//   const E_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1089&slug=&key=`);
//   textRes = await res.text();
//   const F_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1090&slug=&key=`);
//   textRes = await res.text();
//   const G_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1091&slug=&key=`);
//   textRes = await res.text();
//   const H_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1092&slug=&key=`);
//   textRes = await res.text();
//   const I_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1093&slug=&key=`);
//   textRes = await res.text();
//   const J_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1094&slug=&key=`);
//   textRes = await res.text();
//   const K_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1095&slug=&key=`);
//   textRes = await res.text();
//   const L_berkala = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1096&slug=&key=`);
//   textRes = await res.text();
//   const M_berkala = textRes != "" ? JSON.parse(textRes) : null;

// return { ...cachedData, Judul_A_berkala, A_berkala, Judul_B_berkala, B_berkala, Judul_C_berkala, C_berkala, Judul_D_berkala, D_berkala, Judul_E_berkala, E_berkala, Judul_F_berkala, F_berkala, Judul_G_berkala, G_berkala, Judul_H_berkala, H_berkala, Judul_I_berkala, I_berkala, Judul_J_berkala, J_berkala, Judul_K_berkala, K_berkala, Judul_L_berkala, L_berkala, Judul_M_berkala, M_berkala };
// }

export async function fetchInformasiBerkala(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1176&slug=&key=`);
  textRes = await res.text();
  const berkala = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, berkala };
}

export async function fetchInformasiSertaMerta(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1097&slug=&key=`);
  textRes = await res.text();
  const sertaMerta = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, sertaMerta };
}

export async function fetchInformasiSetiapSaat(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1182&slug=&key=`);
  textRes = await res.text();
  const setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, setiapSaat };
}

// export async function fetchInformasiSetiapSaat(host:any){
//   var textRes;
//   const cachedData = await fetchData(host);
//   const { domain } = cachedData;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1115&slug=&key=`);
//   textRes = await res.text();
//   const Judul_A_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1116&slug=&key=`);
//   textRes = await res.text();
//   const Judul_B_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1117&slug=&key=`);
//   textRes = await res.text();
//   const Judul_C_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1118&slug=&key=`);
//   textRes = await res.text();
//   const Judul_D_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1119&slug=&key=`);
//   textRes = await res.text();
//   const Judul_E_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1120&slug=&key=`);
//   textRes = await res.text();
//   const Judul_F_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1121&slug=&key=`);
//   textRes = await res.text();
//   const Judul_G_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1122&slug=&key=`);
//   textRes = await res.text();
//   const Judul_H_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1123&slug=&key=`);
//   textRes = await res.text();
//   const Judul_I_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1124&slug=&key=`);
//   textRes = await res.text();
//   const Judul_J_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1125&slug=&key=`);
//   textRes = await res.text();
//   const Judul_K_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1126&slug=&key=`);
//   textRes = await res.text();
//   const Judul_L_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1127&slug=&key=`);
//   textRes = await res.text();
//   const Judul_M_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1128&slug=&key=`);
//   textRes = await res.text();
//   const Judul_N_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1129&slug=&key=`);
//   textRes = await res.text();
//   const Judul_O_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1130&slug=&key=`);
//   textRes = await res.text();
//   const Judul_P_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1131&slug=&key=`);
//   textRes = await res.text();
//   const Judul_Q_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1098&slug=&key=`);
//   textRes = await res.text();
//   const A_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1099&slug=&key=`);
//   textRes = await res.text();
//   const B_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1100&slug=&key=`);
//   textRes = await res.text();
//   const C_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1101&slug=&key=`);
//   textRes = await res.text();
//   const D_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=11&slug=&key=`);
//   textRes = await res.text();
//   const E_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1132&slug=&key=`);
//   textRes = await res.text();
//   const F_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1133&slug=&key=`);
//   textRes = await res.text();
//   const G_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1134&slug=&key=`);
//   textRes = await res.text();
//   const H_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1135&slug=&key=`);
//   textRes = await res.text();
//   const I_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1136&slug=&key=`);
//   textRes = await res.text();
//   const J_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1137&slug=&key=`);
//   textRes = await res.text();
//   const K_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1138&slug=&key=`);
//   textRes = await res.text();
//   const L_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1139&slug=&key=`);
//   textRes = await res.text();
//   const M_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;
  
//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1140&slug=&key=`);
//   textRes = await res.text();
//   const N_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1141&slug=&key=`);
//   textRes = await res.text();
//   const O_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1142&slug=&key=`);
//   textRes = await res.text();
//   const P_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K016&limit=&offset=&category=1143&slug=&key=`);
//   textRes = await res.text();
//   const Q_setiapSaat = textRes != "" ? JSON.parse(textRes) : null;

//   return { ...cachedData,  Judul_A_setiapSaat, A_setiapSaat, Judul_B_setiapSaat, B_setiapSaat, Judul_C_setiapSaat, C_setiapSaat, Judul_D_setiapSaat, D_setiapSaat, Judul_E_setiapSaat, E_setiapSaat, Judul_F_setiapSaat, F_setiapSaat, Judul_G_setiapSaat, G_setiapSaat, Judul_H_setiapSaat, H_setiapSaat, Judul_I_setiapSaat, I_setiapSaat, Judul_J_setiapSaat, J_setiapSaat, Judul_K_setiapSaat, K_setiapSaat, Judul_L_setiapSaat, L_setiapSaat, Judul_M_setiapSaat, M_setiapSaat, Judul_N_setiapSaat, N_setiapSaat, Judul_O_setiapSaat, O_setiapSaat, Judul_P_setiapSaat, P_setiapSaat, Judul_Q_setiapSaat, Q_setiapSaat  };
// }

export async function fetchLayananKota(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getExLink?siteId=2&code=&groupId=&typeId=LM&limit=&offset=&parent=`);
  textRes = await res.text();
  const layananKota = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, layananKota };
}

export async function fetchDetailLayananKota(host:any, Id: string){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getExLink?siteId=2&code=&groupId=&typeId=LM&limit=&offset=&parent=${Id}`);
  textRes = await res.text();
  const layananKota = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, layananKota };
}

export async function fetchProfil(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K006&limit=&offset=&category=1083&slug=&key=`);
  textRes = await res.text();
  const image = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K006&limit=&offset=&category=1073&slug=&key=`);
  textRes = await res.text();
  const tugasPokok = textRes != "" ? JSON.parse(textRes) : null;

  // var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K006&limit=&offset=&category=1074&slug=&key=`);
  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K003&limit=&offset=&category=924&slug=&key=`);
  textRes = await res.text();
  const landasanHukum = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, image, tugasPokok, landasanHukum };
}

export async function fetchMaklumatPelayanan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K003&limit=&offset=&category=1081&slug=&key=`);
  textRes = await res.text();
  const maklumat = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, maklumat };
}

export async function fetchMottoPelayanan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K003&limit=&offset=&category=1081&slug=&key=`);
  textRes = await res.text();
  const motto = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, motto };
}

export async function fetchPotensi(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getPlace?siteId=172&typeId=&limit=&offset=`);
  textRes = await res.text();
  const potensi = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, potensi };
}

export async function fetchStandarPelayanan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K006&limit=&offset=&category=1076&slug=&key=`);
  textRes = await res.text();
  const standarPelayanan = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, standarPelayanan };
}

export async function fetchListStandarPelayanan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K010&limit=&offset=&category=1148&=slug=&key=`);
  textRes = await res.text();
  const listStandarPelayanan = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, listStandarPelayanan };
}

export async function fetchAgenda(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getEvent?siteId=172&type=AG01&limit=`);
  textRes = await res.text();
  const agenda = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, agenda };
}

export async function fetchGaleri(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/getGallery?siteId=172&category=&limit=&type=&offset=`);
  textRes = await res.text();
  const galeri = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://www.depok.go.id/api/youtube`);
  textRes = await res.text();
  const video = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, galeri, video };
}

export async function fetchFaq(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K017&limit=&offset=&category=&=slug=&key=`);
  textRes = await res.text();
  const faq = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, faq };
}

export async function fetchDashboardKelurahan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K010&limit=&offset=&category=1080&=slug=&key=`);  
  textRes = await res.text();
  const dokumen = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, dokumen };
}

export async function fetchDashboardKecamatan(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K010&limit=&offset=&category=1080&=slug=&key=`);  
  textRes = await res.text();
  const dokumen = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, dokumen };
}

export async function fetchDokumen(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K010&limit=&offset=&category=1080&=slug=&key=`);  
  textRes = await res.text();
  const dokumen = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, dokumen };
}

export async function fetchPengumuman(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K008&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const pengumuman = textRes != "" ? JSON.parse(textRes) : null;

  const categoryRes = await fetch(`https://cms.depok.go.id/ViewPortal/ContentCategory?siteId=172&status=ST01&kanalType=K008&Id=`);
  const categoryText = await categoryRes.text();
  const categories = categoryText !== '' ? JSON.parse(categoryText) : [];
  
  return { ...cachedData, pengumuman, categories };
}

export async function fetchDetailPengumuman(host:any, slug_title: string){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K008&limit=&offset=&category=&slug=${slug_title}&key=`);
  textRes = await res.text();
  const pengumuman  = textRes != "" ? JSON.parse(textRes) : null;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/get_content?siteId=172&status=ST01&kanalType=K008&limit=&offset=&category=&slug=&key=`);
  textRes = await res.text();
  const pengumumanPopuler = textRes != "" ? JSON.parse(textRes) : null;

  return { ...cachedData, pengumuman, pengumumanPopuler };
}

export async function fetchKontak(host:any){
  var textRes;
  const cachedData = await fetchData(host);
  const { domain } = cachedData;

  var res = await fetch(`https://cms.depok.go.id/ViewPortal/profilsite?siteId=172`);
  textRes = await res.text();
  const kontak = textRes != "" ? JSON.parse(textRes) : null;
  
  return { ...cachedData, kontak };
}

// export async function fetchDw(host: any, token: string) {
//   // Fungsi fetchData yang ada sebelumnya tetap tidak berubah

//   // Ambil data dari fetchData
//   const cachedData = await fetchData(host);
//   const { domain } = cachedData;

//   const postData = {
//     // Example data structure based on your API response
//     // Modify this structure to match the API's requirements
//     tahun: '2020',
//     bulan: 'December',
//     kecamatan: 'Cimanggis',
//     kelurahan: 'Tugu',
//     // Add other required fields and their values
//   };
  

//   try {
//     const golangResponse = await fetch('https://192.168.19.57/api/kependudukan/rekap', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(postData),
//     });

//     const responseData = await golangResponse.json();
//     console.log(responseData); // Log the received response

//     if (golangResponse.ok) {
//       // Identify the correct field that represents 'totalPenduduk' in the API response
//       const totalPendudukData = responseData.data; // Example: Check the actual structure of the response
    
//       return { ...cachedData, totalPenduduk: totalPendudukData }; // Assign the correct field representing totalPenduduk
//     } else {
//       throw new Error('Failed to fetch data from API Golang');
//     }
//   } catch (error) {
//     // throw new Error('Failed to fetch data from API Golang' + error.message);
//     console.error('Error fetching data from API Golang:', error);
//     return cachedData;
//   }
// }

// export async function getToken() {
//   const url = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN
//   const tokenAuthUrl = `${url}/auth`
//   const response = await fetch(tokenAuthUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       Email : process.env.NEXT_PUBLIC_USERNAME,
//       Password : process.env.NEXT_PUBLIC_PASSWORD
//     })
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   } else {
//     const data = await response.json();
//     const token = data.data.token;

//     return {token, url}

//   }
// }

// export async function kepegawaianDw(){
//   try {
//     const { token, url } = await getToken();
//     const response = await fetch(`${url}/kepegawaian/rawdata`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }, 
//       body: JSON.stringify(
//         {
//             nama_pegawai : '',
//             instansi: 'DINAS KOMUNIKASI DAN INFORMATIKA',
//             jabatan: '',
//             unit_kerja : '',
//             // status_kwn : 'Kawin',
//         }
//       )
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       const dataKepegawaian = await response.json();
      
//       return dataKepegawaian
//     } 
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function fetchWeather() {
//   try {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=-6.4054801&lon=106.8184199&appid=06946cbe5b3adecc7da685e69d2e94e5`, {
//       method : 'POST',
//       headers : {
//         'Content-Type' : 'application/json',
//         'API-Key' : 'appid '

//       }
//     });
//     if (!res.ok) { 
//       throw new Error("HTTP status " + res.status);
//     }
//     const getCuaca = await res.json();
//     return getCuaca;
//   } catch (error : any) {
//     console.error(`There was an error in your fetch operation: ${error.message}`);
//     return null;
//   }
// }

export async function fetchChartKependudukan() {
  const postData = {
    tahun: '2022',
    title: 'PENDUDUK BERDASARKAN JENIS KELAMIN'
    // bulan: 'December',
    // kecamatan: 'Cimanggis',
    // kelurahan: 'Tugu',
    // jumlah: '2193',

  };
  

  try {
    const { token, url } = await getToken();
    const golangResponse = await fetch(`${url}/kependudukan/rekap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });

    const responseData = await golangResponse.json();

    if (golangResponse.ok && responseData.data) {
      const stdApi = transformArray('subdimensi', 'dimensi', responseData.data)
      // const totalPendudukData = responseData.data;
      const categories = stdApi[0].values;
      let series:any = [];

      stdApi.map((item:any, i:number) => {
        if(i > 0){
          series.push({
            name: item.caption,
            data: item.values
          })
        }
      })
      // console.log(series);
      // const chart = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={series} categories={categories} />
      // console.log(chart);
      
      return {categories, series};
    } else {
      throw new Error('Failed to fetch data from API Golang');
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchChartKepegawaian() {
  const postData = {
    tahun: '2022',
    title: 'Pegawai per Pendidikan'
    // bulan: 'December',
    // kecamatan: 'Cimanggis',
    // kelurahan: 'Tugu',
    // jumlah: '2193',

  };
  

  try {
    const { token, url } = await getToken();
    const golangResponse = await fetch(`${url}/kepegawaian/rekap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });

    const responseData = await golangResponse.json();

    if (golangResponse.ok && responseData.data) {
      const stdApi = transformArray('subdimensi', 'dimensi', responseData.data)
      // const totalPendudukData = responseData.data;
      const categories = stdApi[0].values;
      let series:any = [];

      stdApi.map((item:any, i:number) => {
        if(i > 0){
          series.push({
            name: item.caption,
            data: item.values
          })
        }
      })
      // console.log(series);
      // const chart = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={series} categories={categories} />
      // console.log(chart);
      
      return {categories, series};
    } else {
      throw new Error('Failed to fetch data from API Golang');
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchChartKesehatan() {
  const postData = {
    tahun: '2022',
    title: 'Faskes Berdasarjan Jenis Kelamin'
    // bulan: 'December',
    // kecamatan: 'Cimanggis',
    // kelurahan: 'Tugu',
    // jumlah: '2193',

  };
  

  try {
    const { token, url } = await getToken();
    const golangResponse = await fetch(`${url}/kesehatan/rekap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });

    const responseData = await golangResponse.json();

    if (golangResponse.ok && responseData.data) {
      const stdApi = transformArray('subdimensi', 'dimensi', responseData.data)
      // const totalPendudukData = responseData.data;
      const categories = stdApi[0].values;
      let series:any = [];

      stdApi.map((item:any, i:number) => {
        if(i > 0){
          series.push({
            name: item.caption,
            data: item.values
          })
        }
      })
      // console.log(series);
      // const chart = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={series} categories={categories} />
      // console.log(chart);
      
      return {categories, series};
    } else {
      throw new Error('Failed to fetch data from API Golang');
    }
  } catch (error) {
    console.error(error);
  }
}

export async function fetchChartPenyakit() {
  const postData = {
    tahun: '2019',
    title: 'Penyakit Berdasarkan Jenis Kelamin 2'
    // bulan: 'December',
    // kecamatan: 'Cimanggis',
    // kelurahan: 'Tugu',
    // jumlah: '2193',

  };
  

  try {
    const { token, url } = await getToken();
    const golangResponse = await fetch(`${url}/kesehatan/rekap/penyakit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(postData),
    });

    const responseData = await golangResponse.json();

    if (golangResponse.ok && responseData.data) {
      const stdApi = transformArray('subdimensi', 'dimensi', responseData.data)
      // const totalPendudukData = responseData.data;
      const categories = stdApi[0].values;
      let series:any = [];

      stdApi.map((item:any, i:number) => {
        if(i > 0){
          series.push({
            name: item.caption,
            data: item.values
          })
        }
      })
      // console.log(series);
      // const chart = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={series} categories={categories} />
      // console.log(chart);
      
      return {categories, series};
    } else {
      throw new Error('Failed to fetch data from API Golang');
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getToken() {
  const url = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN
  const tokenAuthUrl = `${url}/auth`
  const response = await fetch(tokenAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Email : process.env.NEXT_PUBLIC_USERNAME,
      Password : process.env.NEXT_PUBLIC_PASSWORD
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    const token = data.data.token;

    return {token, url}

  }
}

export async function kepegawaianDw(){
  try {
    const { token, url } = await getToken();
    const response = await fetch(`${url}/kepegawaian/rawdata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }, 
      body: JSON.stringify(
        {
          nama_pegawai : '',
          instansi: 'DINAS KOMUNIKASI DAN INFORMATIKA',
          jabatan: '',
          unit_kerja : '',
        }
      )
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const dataKepegawaian = await response.json();
      
      return dataKepegawaian
    } 
  } catch (error) {
    console.error(error);
  }
}