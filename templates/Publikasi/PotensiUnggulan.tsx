import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

const PotensiUnggulan = ({ potensi, profilSite, visit }: any) => {
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
                Potensi Unggulan
              </h1>
            </div>
          </div>
        </section>

        <section className="lg:py-24 lg:px-20 pb-5 bg-teal-50 dark:bg-jacarta-800">
          <div className="bg-white lg:p-12 lg:rounded-xl dark:bg-jacarta-900">
            <div className="container">
            <div className="mx-auto mb-10 max-w-xl text-center">
            </div>
              <div className="lg:flex">
                <div className="w-full grid grid-cols-1">
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
                    {potensi && potensi.map((item: any, index: number) => {
                      return (
                      <article>
                        <div
                          className="rounded-2.5xl hover:relative hover:bottom-6 border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                        >
                          <a href="#"
                          data-bs-toggle="modal"
                          data-bs-target={`.video-lightbox-${item.Id}`}
                          target="_blank"
                          >
                            <img
                              src={`https://cms.depok.go.id/upload/place/${item.Image}`}
                              alt="item 1"
                              className="w-full h-32 object-cover rounded-[0.625rem]"
                              loading="lazy"
                            />
                          </a>

                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target={`.video-lightbox-${item.Id}`}
                            target="_blank"
                            className="mt-5 mb-2 flex items-center font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                          >
                            {item.Nama}
                            <div className="flex h-[1.125rem] w-[1.125rem] ml-1 mb-px items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600" data-tippy-content="Verified Collection">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-[.875rem] w-[.875rem] fill-white">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                              </svg>
                            </div>
                          </a>
                          <div className="flex">
                            <a
                              href="/home"
                              className="flex rounded-md bg-green-600 p-1.5 px-4 m-1 text-center items-center text-xs font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                              </svg>

                              Selengkapnya
                            </a>
                            <a
                                href={`https://www.google.co.id/maps/?q=${item['Alamat']}/${item['Lat']},${item['Lng']}`} 
                                target="_blank"                             
                                className="rounded-md bg-accent p-1.5 px-4 m-1 flex text-center items-center text-xs font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                              </svg>

                              Maps
                            </a>
                          </div>
                        </div>
                      </article>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {potensi && potensi.map((item: any, index: number) => {
        return (
          <div
            className={`modal fade video-lightbox js-video-lightbox video-lightbox-${item.Id}`} // Menggunakan kelas CSS
            tabIndex={-1}
            aria-label="Youtube Modal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-6 w-6 fill-jacarta-700"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                    />
                  </svg>
                </button>
                  <div className="ratio ratio-16x9 h-[33rem] lg:ratio before:bg-jacarta-900">
                    <div className="pr-[calc((100%_-_1170px)/2)] bg-white dark:bg-jacarta-700">
                      <div className="lg:flex lg:justify-between">
                        <div className="relative mb-8 lg:w-[63%] bg-blend-normal">
                          <img src={`https://cms.depok.go.id/upload/place/${item.Image}`} className="lg:w-full lg:h-full" alt="" loading="lazy" />
                          <div className={`col-start-1 lg:hidden row-start-1 bg-gray-800 bg-opacity-70 w-full h-full absolute bottom-0`}></div>
                        </div>
      
                        <div className="py-10 px-6 lg:w-[37%] bottom-48 lg:bottom-0 relative">
                          <h2 className="mb-8 mt-16 lg:mb-6 font-display z-10 text-3xl lg:block hidden text-jacarta-700 hover:text-green-600 dark:text-white">
                            {item.Nama}
                          </h2>
                          <h2 className="mb-8 mt-16 lg:mb-6 font-display z-10 text-3xl lg:hidden block text-white hover:text-green-600 dark:text-white">
                            {item.Nama}
                          </h2>
                          <p className="mb-12 text-lg z-10 leading-normal text-jacarta-300 hidden lg:block dark:text-jacarta-300">
                            {item.Deskripsi.replace(/<[^>]+>|&nbsp;/g, '').slice(0, 80) + '...'}
                          </p>
                          <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <div>
                            <a href="#" className="block">
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 hover:text-green-600 dark:text-white"
                                >{item.Telp}</span>
                            </a>
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <div>
                            <a href="#" className="block">
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 hover:text-green-600 dark:text-white"
                                >{item.Email}</span>
                            </a>
                            </div>
                          </div>
                          <div className="mb-3 flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <div>
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 dark:text-white"
                                >{item.Alamat}</span>
                            </div>
                          </div>
                          <div className="flex">
                          <a
                            href="/home"
                            className="flex rounded-md bg-green-600 p-1.5 px-4 m-1 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-6 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
      
                            Kunjungi Situs
                          </a>
                          <a
                            href={`https://www.google.co.id/maps/?q=${item['Alamat']}/${item['Lat']},${item['Lng']}`} 
                            target="_blank"                             
                            className="rounded-md bg-accent p-1.5 px-4 m-1 flex text-center items-center text-xs font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-6 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
      
                            Maps
                          </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default PotensiUnggulan;