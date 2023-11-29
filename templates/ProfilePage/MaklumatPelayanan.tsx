import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const MaklumatPelayanan = ( {maklumat, profilSite, visit}: any ) => {
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
                Maklumat Pelayanan
              </h1>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
            <div className="rounded-2.5xl bg-white dark:bg-jacarta-700 md:p-[4.25rem]">
              <div className="container mx-auto">
                {maklumat && maklumat.map((item: any, index: number) => {
                  return (
                    <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} className="mx-auto w-full"
                    alt="team" />
                    )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default MaklumatPelayanan;