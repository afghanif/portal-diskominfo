import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import { ChartBuilder } from "../components/ChartBuilder";

const DashboardKecamatan =  ({ chartKependudukan, chartKepegawaian, chartKesehatan, chartPenyakit, profilSite, visit  }: any) => {
  const chartContentKependudukan = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={chartKependudukan?.series} categories={chartKependudukan?.categories} height={'400px'} width={'530px'}/>

  const chartContentKepegawaian = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={chartKepegawaian?.series} categories={chartKepegawaian?.categories} height={'400px'} width={'530px'}/>

  const chartContentKesehatan = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={chartKesehatan?.series} categories={chartKesehatan?.categories} height={'400px'} width={'1130px'}/>

  const chartContentPenyakit = <ChartBuilder id="pegawai-statistik-chart" options={'dashboardNoLabelColumn'} type="bar" series={chartPenyakit?.series} categories={chartPenyakit?.categories} height={'400px'} width={'1130px'}/>

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
                Dashboard Kecamatan
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
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-2">
                <div
                    className="accordion-item mb-5 overflow-hidden rounded-lg dark:border-jacarta-600"
                    >
                    <h2 className="accordion-header" id="accordionFAQ">
                        <button
                        className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-1"
                        aria-expanded="true"
                        aria-controls="faq-1"
                        >
                        <span>Chart Kependudukan</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                        </svg>
                        </button>
                    </h2>
                    <div
                        id="faq-1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faq-heading-1"
                        data-bs-parent="#accordionFAQ"
                    >
                        <div
                        className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                        <p className="dark:text-jacarta-200">
                        {chartContentKependudukan}
                        </p>
                        </div>
                    </div>
                </div>
                <div
                    className="accordion-item mb-5 overflow-hidden rounded-lg dark:border-jacarta-600"
                    >
                    <h2 className="accordion-header" id="faq-heading-2">
                        <button
                        className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-2"
                        aria-expanded="true"
                        aria-controls="faq-2"
                        >
                        <span>Chart Kepegawaian</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                        </svg>
                        </button>
                    </h2>
                    <div
                        id="faq-2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faq-heading-2"
                        data-bs-parent="#faq-heading-2"
                    >
                        <div
                        className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                        <p className="dark:text-jacarta-200">
                        {chartContentKepegawaian}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="accordion-item mb-5 overflow-hidden rounded-lg dark:border-jacarta-600"
                >
                <h2 className="accordion-header" id="faq-heading-3">
                    <button
                    className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-3"
                    aria-expanded="true"
                    aria-controls="faq-3"
                    >
                    <span>Chart Kesehatan</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                    </svg>
                    </button>
                </h2>
                <div
                    id="faq-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-heading-3"
                    data-bs-parent="#faq-heading-3"
                >
                    <div
                    className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700"
                    >
                    <p className="dark:text-jacarta-200">
                    {chartContentKesehatan}
                    </p>
                    </div>
                </div>
            </div>
            {/* <div
                    className="accordion-item mb-5 overflow-hidden rounded-lg dark:border-jacarta-600"
                    >
                    <h2 className="accordion-header" id="penyakit">
                        <button
                        className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-penyakit"
                        aria-expanded="true"
                        aria-controls="faq-penyakit"
                        >
                        <span>Chart Penyakit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="accordion-arrow h-4 w-4 shrink-0 fill-jacarta-700 transition-transform dark:fill-white"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                        </svg>
                        </button>
                    </h2>
                    <div
                        id="faq-penyakit"
                        className="accordion-collapse collapse"
                        aria-labelledby="penyakit"
                        data-bs-parent="#penyakit"
                    >
                        <div
                        className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700"
                        >
                        <p className="dark:text-jacarta-200">
                        {chartContentPenyakit}
                        </p>
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

export default DashboardKecamatan;