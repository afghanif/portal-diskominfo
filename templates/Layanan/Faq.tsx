import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const Faq = ( {faq, profilSite, visit }: any ) => {
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

        <section className="relative py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="justify-between lg:flex lg:space-x-20">
            <div className="lg:w-[55%]">
              <h2 className="mb-6 font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Frequently Asked Questions
              </h2>
              <div className="accordion mb-14" id="accordionFAQ">
              {faq && faq.map((item: any, index: number) => {
                return (
                  <div
                    className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
                  >
                    <h2 className="accordion-header" id="faq-heading-1">
                      <button
                        className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-1"
                        aria-expanded="true"
                        aria-controls="faq-1"
                      >
                        <span>{item.title}</span>
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
                          {item.content.replace(/<[^>]+>|&nbsp;/g, '')}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
              </div>
            </div>
            <div className="lg:w-[45%]">
              <div className="relative">
                <img src="/img/about/FAQs-amico.png" alt="" className="absolute w-[22rem] top-0 animate-fly" />
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

export default Faq;