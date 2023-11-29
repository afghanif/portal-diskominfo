import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from 'react';

const StandarLayanan = ({ standarPelayanan: propStandarPelayanan, profilSite, visit }: any) => {
  const [standarPelayanan, setStandarPelayanan] = useState([]);

  useEffect(() => {
    // Check if the propStandarPelayanan is available and not empty before setting the state
    if (propStandarPelayanan && propStandarPelayanan.length > 0) {
      setStandarPelayanan(propStandarPelayanan);
    } else {
      // Fetch data from your API here if propStandarPelayanan is not available
      // For example, you can use fetch or any other method
    }
  }, [propStandarPelayanan]);

  useEffect(() => {
    // Fetch data from your API here
    // For example, you can use fetch or any other method
    // Update the state with the API response
    // Replace the placeholder API_URL with your actual API endpoint
    fetch('API_URL')
      .then(response => response.json())
      .then(data => setStandarPelayanan(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
                Standar Layanan
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
              <div className="lg:flex lg:justify-between">
                  <div className="">
                      {standarPelayanan && standarPelayanan.map((item: any, index: number) => {
                        return (
                          <>
                            <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
                          </>
                        )
                      })
                      }
                    <div className="flex items-center my-4">
                      <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Saya Setuju dengan syarat & ketentuan</label>
                    </div>
                    <a href="/Layanan/list-standar-layanan" className="rounded-full float-right bg-green-600 px-6 py-4 my-4 font-display text-sm text-white hover:bg-green-600-dark">
                      Selanjutnya
                    </a>
                  </div>
                <div className="lg:w-[45%]">
                  <div className="relative">
                    <img src="img/about/GDPR-cuate.png" alt="" className="absolute top-0 animate-fly" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default StandarLayanan;