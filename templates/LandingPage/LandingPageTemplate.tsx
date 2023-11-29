import Script from "next/script";
import Link from "next/link";
import Styles from "./styling.module.css";

const LandingPageTemplate = ( {layanan, profilSite}: any) => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('id-ID', options);

  return (
    <div>
      <Script src="js/countdown.bundle.js" />
      <Script src="js/app.bundle.js" />

      <main>
        <section className="hero relative lg:pb-10 lg:pt-10">
        <picture className="pointer-events-none absolute inset-x-0 bottom-72 top-0 -z-10 dark:hidden">
            <img src="../img/gradient_light.jpg" alt="gradient" className="w-full h-[49.3rem] bg-cover object-cover" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 bottom-72 dark:hidden">
            <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="absolute top-[18.7rem] left-28 lg:relative lg:top-0 lg:left-0 lg:ml-8 flex lg:xl:ml-12 lg:float-right lg:m-10 lg:mr-20">
            <a
              href="#"
              className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-sky-600 focus:border-transparent focus:bg-sky-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-sky-600 dark:text-white"
              data-bs-toggle="modal"
              data-bs-target="#walletModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </a>
            <div className="js-nav-dropdown group-dropdown relative">
              <button
                className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white border-jacarta-100 transition-colors hover:border-transparent hover:bg-sky-600 focus:border-transparent focus:bg-sky-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-sky-600"
                id="profileDropdown"
                data-bs-toggle="dropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
              </button>
              <div className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl">
                <a
                  href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-sky-600 focus:text-sky-600 dark:hover:bg-jacarta-600"
                >
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                    English
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-sky-600 focus:text-sky-600 dark:hover:bg-jacarta-600"
                >
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">
                    Indonesia
                  </span>
                </a>
              </div>
            </div>

            <a
              href="#"
              className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-sky-600 focus:border-transparent focus:bg-sky-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-sky-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </a>
          </div>

          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-5 font-display text-5xl text-jacarta-700 dark:text-white lg:text-4xl xl:text-5xl">
                Hallo, Selamat Datang di Portal
                <br />
                <span className="text-sky-600"> {profilSite.Name}</span>
              </h1>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                &nbsp;
                <p className="mb-5 dark:text-jacarta-300 text-sm dark:text-white">
                  Depok, {formattedDate}
                </p>
                &nbsp; &nbsp; &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                &nbsp;
                <p className="mb-5 dark:text-jacarta-300 text-sm dark:text-white">
                  30°C
                </p>
              </div>
              <a
                href="/home"
                className="inline-block rounded-full bg-sky-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-sky-600-dark"
              >
                Kunjungi Situs
              </a>
            </div>
          </div>
        </section>

      {layanan && layanan.map((item: any, index: number) => {
        return (
          <div
            className="modal fade video-lightbox js-video-lightbox"
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
                        <img
                              src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : 'img/kelurahan/cilangkap.jpg'}
                              alt="item 1"
                              className="swiper-lazy w-full object-cover"
                              height="430"
                              width="379"
                            />
                          <div className={`col-start-1 lg:hidden ${Styles.overlaydark} row-start-1 bg-gray-800 bg-opacity-70 w-full h-full absolute bottom-0`}></div>
                        </div>

                        <div className="py-10 px-6 lg:w-[37%] bottom-48 lg:bottom-0 relative">
                          <h2 className="mb-8 mt-16 lg:mb-6 font-display z-10 text-3xl lg:block hidden text-jacarta-700 hover:text-sky-600 dark:text-white">
                            {item.title.replace(/<[^>]+>|&nbsp;/g, '')}
                          </h2>
                          <h2 className="mb-8 mt-16 lg:mb-6 font-display z-10 text-3xl lg:hidden block text-white hover:text-sky-600 dark:text-white">
                            {item.title.replace(/<[^>]+>|&nbsp;/g, '')}
                          </h2>
                          <p className="mb-12 text-lg z-10 leading-normal text-jacarta-300 hidden lg:block dark:text-jacarta-300">
                            {item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}
                          </p>
                          <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <div>
                            <a href="#" className="block">
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 hover:text-sky-600 dark:text-white"
                                >{item.tgl_publish.slice(0, 10)}</span>
                            </a>
                            </div>
                          </div>
                          <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <div>
                            <a href="#" className="block">
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 hover:text-sky-600 dark:text-white"
                                >kelurahancilangkap.taposdepok@gmail.com</span>
                            </a>
                            </div>
                          </div>
                          <div className="mb-3 flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <div>
                              <span className="mb-3 mt-2 block font-display text-xs font-semibold text-jacarta-700 dark:text-white"
                                >Jl. Cilangkap RT.001 RW 013, Tapos, Kota Depok</span>
                            </div>
                          </div>
                          <div className="flex">
                          <a
                            href="/home"
                            className="flex rounded-md bg-sky-600 p-1.5 px-4 m-1 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-sky-600-dark"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-6 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            Kunjungi Situs
                          </a>
                          <a
                            href="https://www.google.com/maps/@-6.4451946,106.8568975,3a,75y,310.57h,95.96t/data=!3m6!1e1!3m4!1srgNivmxsa3IXmmYvma3ocg!2e0!7i16384!8i8192?entry=ttu" target="_blank"
                            className="rounded-md bg-accent p-1.5 px-4 m-1 flex text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-sky-600-dark"
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

        <div className="relative px-6 sm:px-0">
          <div className="swiper coverflow-slider !py-5">
            <div className="swiper-wrapper">
              {layanan && layanan.map((item: any, index: number) => {
                  return (
                  <div className="swiper-slide">
                    <article>
                      <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a
                            href="https://kel-cilangkap.depok.go.id/Home/tentang"
                            data-bs-toggle="modal"
                            data-bs-target=".video-lightbox"
                            target="_blank"
                          >
                            <img
                              src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : 'img/kelurahan/cilangkap.jpg'}
                              alt="item 1"
                              className="swiper-lazy h-[260px] w-full object-cover"
                              height="430"
                              width="379"
                            />
                            <div className="swiper-lazy-preloader"></div>
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <div>
                              <a href="#" className="block">
                                <span className="font-display text-lg leading-none text-jacarta-700 hover:text-sky-600 dark:text-white">
                                  {item.title.replace(/<[^>]+>|&nbsp;/g, '')}
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-sky-600">
                                {item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="swiper-button-prev swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-green-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          </div>
          <div className="swiper-button-next swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-jacarta-700 group-hover:fill-green-600"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPageTemplate;
