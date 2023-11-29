import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const MottoPelayanan = ( {motto, profilSite, visit}: any ) => {
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
                Motto Pelayanan
              </h1>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="../img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
            <div
              className="flex flex-wrap rounded-2.5xl bg-white dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
              <div className="w-full text-center">
                <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">SEHAT</h1>

                <p className="dark:text-jacarta-300"><b>“S”</b>, Santun dalam melayani.</p>
                <p className="dark:text-jacarta-300"><b>“E”</b>, Efektif dan efisien.</p>
                <p className="dark:text-jacarta-300"><b>“H”</b>, Hindari Gratifikasi.</p>
                <p className="dark:text-jacarta-300"><b>“A”</b>, Amanah dalam bekerja.</p>
                <p className="dark:text-jacarta-300 mb-10"><b>“T”</b>, Tepat dan Transparan.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default MottoPelayanan;