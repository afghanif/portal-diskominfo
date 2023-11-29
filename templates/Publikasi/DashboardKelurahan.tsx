import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const DashboardKelurahan = () => {
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
                Dashboard Kelurahan
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
            <iframe frameBorder="0" marginHeight={0} marginWidth={0} title="Data Visualization" allowTransparency={true}
              allowFullScreen={true} className="tableauViz"
              style={{ display: 'block', width: '100%', height: '2100px', margin: '0px', padding: '0px', border: 'none' }}
              src="https://public.tableau.com/views/DKB2Tahun2022/2022?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Fpublic.tableau.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=no&amp;:animate_transition=yes&amp;:display_static_image=no&amp;:display_spinner=no&amp;:display_overlay=yes&amp;:display_count=yes&amp;:language=en-US&amp;publish=yes&amp;:loadOrderID=0"></iframe>
          </div>
        </section>
      </main>

      <Footer map={true} />
    </div>
  )
}

export default DashboardKelurahan;