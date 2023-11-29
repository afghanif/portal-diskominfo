import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const InteraksiMasyarakat = () => {
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
                Interaksi Masyarakat
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
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="h-5 w-5 fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">88</h3>
                <p className="dark:text-jacarta-300">
                  Jumlah Peserta Survey
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="h-5 w-5 fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">88.25</h3>
                <p className="dark:text-jacarta-300">
                  Nilai IKM
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="h-5 w-5 fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">Sangat Baik</h3>
                <p className="dark:text-jacarta-300">
                  Mutu Pelayanan
                </p>
              </div>
            </div>

            <h2 className="mb-16 text-center font-display text-3xl text-jacarta-700 dark:text-white">
              Laporan Detail Survey Kepuasan Masyarakat
            </h2>

            <div role="table"
              className="scrollbar-custom grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
              <div className="contents" role="row">
                <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                  <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Indikator</span>
                </div>
                <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                  <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Nilai</span>
                </div>
                <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                  <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Kategori</span>
                </div>
                <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                  <span
                    className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Expiration</span>
                </div>
                <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600" role="columnheader">
                  <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">From</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer map={true} />
    </div>
  )
}

export default InteraksiMasyarakat;