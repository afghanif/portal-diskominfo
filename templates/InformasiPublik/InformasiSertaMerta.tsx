import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const InformasiSertaMerta = ( {sertaMerta, profilSite, visit}: any ) => {
  return (
    <div>
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />
      <Header site={false} />

      <main className="pt-[5.5rem] lg:pt-24">
        <section className="hero relative py-16 dark:bg-jacarta-800 bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-3xl text-jacarta-700 dark:text-white lg:text-3xl xl:text-4xl">
                Informasi Publik <span className="text-accent">Serta Merta.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
            <div className="flex mb-4">
              <div className="w-3/4 mr-2">
              </div>
              <div className="w-1/4">
                <form action="search" className="relative ml-12 mr-8 basis-3/12">
                  <input type="search"
                    className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                    placeholder="Search" />
                  <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                    </svg>
                  </span>
                </form>
              </div>
            </div>
            {sertaMerta && sertaMerta.map((item: any, index: number) => {
              const apiUrl = item.uploaddokumen
              ? `https://cms.depok.go.id/upload/file/${item.uploaddokumen}`
              : item.urlcontent;
              return (
              <div
                className="relative flex items-center my-2 rounded-2xl border border-jacarta-100 bg-white p-4 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                <figure className="mr-5 self-start">
                    <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/about/357503819_568534888807533_6950311277093983664_n.jpg'} className="mr-4 h-24 object-cover w-48 shrink-0 self-start rounded-lg md:mr-8 md:h-[10rem] md:w-[10rem]"
                                  alt="team" />
                </figure>

                <div className="w-full">
                  <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="mb-3 block text-sm text-jacarta-500">{item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}</span>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="block text-xs text-jacarta-300">{item.tgl_publish.slice(0, 10)}</span>
                      <a href={apiUrl} download>
                        <span className="text-sm dark:text-jacarta-200">Detail</span>
                      </a>
                  </div>
                </div>

              </div>
              )
            })}
            {/* <div
              className="relative flex items-center my-2 rounded-2xl border border-jacarta-100 bg-white p-4 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
              <figure className="mr-5 self-start">
                <img src="/img/about/Penghentian Sementara Layanan SET PP tanggal 7 s.d. 14 Februari 2022.jpeg"
                  alt="author"
                  className="mr-4 h-24 object-cover w-48 shrink-0 self-start rounded-lg md:mr-8 md:h-[10rem] md:w-[10rem]" />
              </figure>

              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                  Penghentian Sementara Pelaksanaan Persidangan dan Layanan Administrasi Secara Tatap Muka di Pengadilan
                </h3>
                <span className="mb-3 block text-sm text-jacarta-500">akarta, 07 Februari 2022 Sehubungan dengan peningkatan
                  kasus Covid-19 secara signifikan di Jakarta, seluruh pelaksanaan persidangan dan layanan administrasi
                  secara tatap muka di Pengadilan Pajak</span>
                <div className="mt-8 flex items-center justify-between">
                  <span className="block text-xs text-jacarta-300"> 2023-01-26 08:22:00</span>

                  <div className="flex items-center space-x-1">
                    <a href="#">
                      <span className="text-sm dark:text-jacarta-200">Detail</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div
              className="relative flex items-center my-2 rounded-2xl border border-jacarta-100 bg-white p-4 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
              <figure className="mr-5 self-start">
                <img src="/img/about/image-not-found.jpg" alt="author"
                  className="mr-4 h-24 object-cover w-48 shrink-0 self-start rounded-lg md:mr-8 md:h-[10rem] md:w-[10rem]" />
              </figure>

              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                  Layanan Konsultasi Tatap Muka Terkait Dana Transfer ke Daerah dan Dana Desa masih DITUTUP
                </h3>
                <span className="mb-3 block text-sm text-jacarta-500">Jakarta, 08 November 2021 Saat ini, Kementerian Keuangan
                  c.q. Direktorat Jenderal Perimbangan Keuangan belum melayani konsultasi tatap muka terkait Dana Transfer
                  ke Daerah dan Dana</span>
                <div className="mt-8 flex items-center justify-between">
                  <span className="block text-xs text-jacarta-300"> 2023-01-26 08:22:00</span>

                  <div className="flex items-center space-x-1">
                    <a href="#">
                      <span className="text-sm dark:text-jacarta-200">Detail</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div
              className="relative flex items-center my-2 rounded-2xl border border-jacarta-100 bg-white p-4 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
              <figure className="mr-5 self-start">
                <img src="/img/about/WhatsApp Image 2021-07-01 at 15.36.11.jpeg" alt="author"
                  className="mr-4 h-24 object-cover w-48 shrink-0 self-start rounded-lg md:mr-8 md:h-[10rem] md:w-[10rem]" />
              </figure>

              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                  Penutupan Layanan Tatap Muka Pada Unit Pengadaan Barang/Jasa Kementerian Keuangan
                </h3>
                <span className="mb-3 block text-sm text-jacarta-500">Selama masa pandemi, layanan tatap mukaditiadakanhingga
                  diumumkan informasi lebih lanjut. Registrasi dan Verifikasi dilakukan. Layanan Bidding Room bagi penyedia
                  barang/jasa. Konsultasi </span>
                <div className="mt-8 flex items-center justify-between">
                  <span className="block text-xs text-jacarta-300"> 2023-01-26 08:22:00</span>

                  <div className="flex items-center space-x-1">
                    <a href="#">
                      <span className="text-sm dark:text-jacarta-200">Detail</span>
                    </a>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default InformasiSertaMerta;