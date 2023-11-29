import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const JenisLayanan = ( {layanan, profilSite, visit }: any ) => {
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
                Informasi & Layanan
              </h1>
            </div>
          </div>
        </section>

        <section className="py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-5">
              {layanan && layanan.map((item: any, index: number) => {
                return (
                <div
                  className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                  <a href=""
                      // onClick={() => displayIframe(item.URL)}
                      data-bs-toggle="modal"
                      data-bs-target={`.video-lightbox-${item.content_id}`}
                      target="_blank"
                    >
                    <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                      alt="team" />
                    <h3 className="font-display text-md text-jacarta-700 dark:text-white">{item.title.replace(/<[^>]+>|&nbsp;/g, '')}</h3>
                  </a>
                  <span className="text-sm font-medium tracking-tight text-jacarta-400">{item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}</span>
                </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default JenisLayanan;