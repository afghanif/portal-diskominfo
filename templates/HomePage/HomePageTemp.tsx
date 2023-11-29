"use client"
import Script from "next/script";
import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
interface WeatherData {
  list: {
    dt_txt: any;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  }[];
}

const HomePage = ({ profilSite, visit, slider, galeriKegiatan, pengumuman, dokumen, potensi, agenda, layanan, layananKota, hargaKomoditas, beritaKota, channel, berita, client, getCuaca }: any) => {
  // return JSON.stringify ( beritaKota )
  // return pengumuman.map((item:any, index:number)=> (
  // <div>
  //   {item.File}
  // </div>
  // ))

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://api.openweathermap.org/data/2.5/forecast?lat=-6.4054801&lon=106.8184199&appid=06946cbe5b3adecc7da685e69d2e94e5&lang=id';
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
  
        const data: WeatherData = await response.json();
        setWeatherData(data);
  
        // Log the entire list for debugging
        console.log(data.list);
      } catch (error: any) {
        console.error('Error fetching data:', error);
        return;
      }
    };
  
    fetchData();
  }, []);
  

  const list = weatherData?.list || [];
  const todayWeather = list.length > 0 ? list[0] : null;
  const tomorrowWeather = list.find((item) => item.dt_txt.includes('tomorrow')) || null;

  const todayTempValue = todayWeather ? Object.values(todayWeather.main || {})[1] : null;
  const todayTempValRounded = todayTempValue ? Math.round((todayTempValue as number - 273.15) * 100) / 100 : null;

  const tomorrowTempValue = tomorrowWeather ? Object.values(tomorrowWeather.main || {})[1] : null;
  const tomorrowTempValRounded = tomorrowTempValue
    ? Math.round((tomorrowTempValue as number - 273.15) * 100) / 100
    : null;

  function capitalizeFirstLetter(word: any) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredBerita = berita?.filter((item: any) => {
    const searchTermCondition = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return searchTermCondition;
  });
  
  const maxButtons = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(
    startPage + maxButtons - 1,
    Math.ceil((filteredBerita?.length || 0) / itemsPerPage)
  );
  
  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // Ensure filteredBerita is defined before calling slice
  const currentBerita = filteredBerita?.slice(indexOfFirstItem, indexOfLastItem) || [];

  interface Layanan {
    ParentId: string | null;
    Id: string;
    ImageMenu: string | null;
    TitleMenu: string;
    // ... (properti lainnya)
  }

  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('id-ID', options);

  const [videoUrl, setVideoUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const displayIframe = (videoId: string) => {
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    setVideoUrl(youtubeEmbedUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setShowModal(false);
  };

  const gprKominfoHTML = `
        <div id="gpr-kominfo-widget-container" class="h-[37rem] my-6"></div>
        <script type="text/javascript" src="https://widget.kominfo.go.id/gpr-widget-kominfo.min.js"></script>
    `;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/144928';
    script.async = true;
    document.body.appendChild(script);
}, []);

  return (
    <div>
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />

      <Header profilSite={profilSite} />

      <main>
        {/* <!-- Hero Slider --> */}
        <section className="relative h-fit">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="img/blog/Walpaper depok-01.png" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="swiper full-slider lg:h-[34rem] h-[20rem]">
            <div className="swiper-wrapper">
              {slider && slider.map((item: any, index: number) => {
                return (
                  <div className="swiper-slide lg:h-[34rem] h-[20rem]" key={index}>
                    <div className="relative max-h-0 z-10 -mt-48 dark:bg-jacarta-900">
                      <div className="px-4 py-4 xl:px-24 pt-80">
                        <div className="relative lg:h-[25rem] h-[11rem] overflow-hidden rounded-2xl px-16 pt-16 pb-8 shadow-md lg:px-24">
                          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                            <img src={`https://cms.depok.go.id/upload/slider/${item.File}`} alt="gradient" className="h-fit w-full" />
                          </picture>
                          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
                            <img src={`https://cms.depok.go.id/upload/slider/${item.File}`} alt="gradient dark" className="h-fit w-full" />
                          </picture>
                          <div className="items-center justify-between md:flex">
                            <div className="mb-6 md:w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* <!-- end main slider --> */}

          <div className="swiper full-slider-thumbs hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide cursor-pointer rounded p-5">
                {/* <img src="img/hero/hero_slide_1_thumb.jpg" className="w-full rounded-lg" alt="thumb 1" /> */}
                <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                  <div className="progress absolute h-0.5 w-0 bg-green-600"></div>
                </div>
              </div>
              <div className="swiper-slide cursor-pointer rounded p-5">
                {/* <img src="img/hero/hero_slide_2_thumb.jpg" className="w-full rounded-lg" alt="thumb 2" /> */}
                <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20">
                  <div className="progress absolute h-0.5 w-0 bg-green-600"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end hero slider --> */}

        {/* <!-- Thumbs --> */}
        {/* <div className="relative py-5 px-4">
          <div className="lg:py-8 lg:px-20">
            <div className="lg:flex">
              <div className="lg:w-1/4 w-full grid grid-cols-1">
                <div className="md:flex md:flex-wrap">
                  <div className="md:w-1/4 md:basis-auto lg:w-full lg:pr-8 text-center lg:text-start">
        
                    <h1 className="mb-2 font-display text-2xl lg:text-5xl font-semibold text-jacarta-700 dark:text-white">Informasi Cuaca dan Waktu Sesuai Lokasimu :
                    </h1>
        
                    <p className="mb-4 text-4xl text-accent dark:text-accent">
                      Kota Depok.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4 w-full text-center lg:text-start mt-10 lg:mt-0">
                <h1 className="text-md mb-8 font-semibold text-jacarta-700 dark:text-white">Layanan Cuaca Kota Depok</h1>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
                  <div
                    className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-4 text-center dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img src="https://dsw.depok.go.id/assets-web/img/icon/cuaca/calendar.png" className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                        alt="team" />
                      <h3 className="font-display text-md text-jacarta-700 dark:text-white">{formattedDate}</h3>
                    <span className="text-sm font-medium tracking-tight text-jacarta-400">20 Rabi'ul Awwal 1445 H</span>
                  </div>
                  <div
                    className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img src="https://dsw.depok.go.id/assets-web/img/icon/cuaca/clock.png" className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                        alt="team" />
                      <h3 className="font-display text-md text-jacarta-700 dark:text-white">12:05 WIB</h3>
                    <span className="text-sm font-medium tracking-tight text-jacarta-400">Shalat Dzuhur</span>
                  </div>
                  <div
                    className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img src="https://dsw.depok.go.id/assets-web/img/icon/cuaca/cloudy.png" className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]" alt="team" />
                      <h3 className="font-display text-md text-jacarta-700 dark:text-white">{todayTempValRounded} °C</h3>
                    <span className="text-sm font-medium tracking-tight text-jacarta-400">Hari Ini</span>
                  </div>
                  <div className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center dark:border-jacarta-600 dark:bg-jacarta-700">
                      <img
                        src="https://dsw.depok.go.id/assets-web/img/icon/cuaca/cloudy-day.png"
                        className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                        alt="team"
                      />
                      {tomorrowTempValRounded !== null ? (
                        <h3 className="font-display text-md text-jacarta-700 dark:text-white">
                          {tomorrowTempValRounded} °C
                        </h3>
                      ) : (
                        <p className="font-display text-md text-jacarta-700 dark:text-white">N/A</p>
                      )}
                    <span className="text-sm font-medium tracking-tight text-jacarta-400">Besok</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- end thumbs slider --> */}

        <section className="lg:py-8 lg:px-20 py-5 px-4 bg-teal-50 dark:bg-jacarta-800">
          <div className="">
            <div className="lg:flex">
              <div className="lg:w-full w-full grid grid-cols-1 text-center lg:text-start">
                <h3 className="font-display p-4 text-3xl text-jacarta-700 dark:text-white">Layanan Diskominfo</h3>
                <span className="text-md px-4 pb-2">Layanan Diskominfo Kota Depok</span>
                <div className="scrollbar-custom overflow-x-auto rounded-lg">
                  <div className="min-w-fit">
                    {/* Tabs Nav */}
                    <div className="lg:flex mt-2">
                      <div className="lg:w-3/4 w-full">
                        <ul className="nav nav-tabs flex items-center lg:place-content-start place-content-center" role="tablist">
                          {/* Offers */}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent"
                              id="offers-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#offers"
                              type="button"
                              role="tab"
                              aria-controls="offers"
                              aria-selected="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                className="mr-1 h-5 w-5 fill-current"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"
                                />
                              </svg>
                              <span className="font-display text-xs lg:text-base font-medium">Layanan Diskominfo</span>
                            </button>
                          </li>

                          {/* Properties */}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link mr-2.5 mb-2.5 rounded-t-xl border bg-white relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent"
                              id="properties-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#properties"
                              type="button"
                              role="tab"
                              aria-controls="properties"
                              aria-selected="false"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                className="mr-1 h-5 w-5 fill-current"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"
                                />
                              </svg>
                              <span className="font-display text-xs lg:text-base font-medium">Layanan Kota</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="lg:w-3/4 hidden lg:block w-full lg:text-right text-center">
                        <a href="/Layanan/jenis-layanan">
                          <button className="rounded-full bg-green-600 my-6 lg:my-0 px-6 py-4 lg:py-2 font-display text-sm text-white hover:bg-green-600-dark">
                            Lihat Selengkapnya
                          </button>
                        </a>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Offers */}
                      <div className="tab-pane fade show active" id="offers" role="tabpanel" aria-labelledby="offers-tab">
                        <div
                          className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10"
                        >
                          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
                          {layanan && layanan.map((item: any, index: number) => {
                            return (
                            <div
                              className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
                              key={index}
                              >
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
                      </div>

                      {/* Properties */}
                      <div className="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="properties-tab">
                        <div
                            className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10"
                          >
                          <div className="grid lg:gap-5 gap-2 grid-cols-2 md:grid-cols-4 mt-6">
                          {layananKota &&
                              layananKota
                                .filter((item: { ParentId: string; }) => item.ParentId === "") // Menampilkan item dengan ParentId yang kosong
                                .slice(0, 8)
                                .map((item: {
                                  URLMenu: string; Id: any; ImageMenu: any; TitleMenu: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
                                  }, index: React.Key | null | undefined) => (
                                  <div key={index} className="rounded-2lg border border-jacarta-100 bg-white p-2 lg:p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700">
                                  {item.URLMenu === "" ? (
                                    <a href={`/Layanan/layanan-detail-kota/${item.Id}`}>
                                      <img
                                        src={item.ImageMenu ? `https://cms.depok.go.id/upload/externalLogo/${item.ImageMenu}` : '/img/kecamatan/dsw/kesehatan.png'}
                                        className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                                        alt="team"
                                      />
                                      <h3 className="font-display text-md text-jacarta-700 dark:text-white">{item.TitleMenu}</h3>
                                    </a>
                                  ) : (
                                    <div
                                      onClick={() => displayIframe(item.URLMenu)}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      <img
                                        src={item.ImageMenu ? `https://cms.depok.go.id/upload/externalLogo/${item.ImageMenu}` : '/img/kecamatan/dsw/kesehatan.png'}
                                        className="mx-auto mb-6 h-[5.125rem] w-[5.125rem]"
                                        alt="team"
                                      />
                                      <h3 className="font-display text-md text-jacarta-700 dark:text-white">{item.TitleMenu}</h3>
                                    </div>
                                  )}
                                </div>
                                ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end tab content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!-- Promo 2 --> */}
        <section className="lg:py-20 lg:px-20 py-5 px-4">
          <div className="">
            <div className="lg:flex mb-4">
              <div className="lg:w-3/5 w-full relative">
                <h2 className="mb-2 text-center font-display text-3xl text-jacarta-700 dark:text-white">Galeri Kegiatan
                </h2>
                <p className="text-center mb-16 text-jacarta-700 dark:text-white">Galeri Kegiatan Smart City yang berisi
                  tentang informasi Kota Depok
                </p>
                {/* <!-- Slider --> */}
                <div className="swiper single-slider text-center m-10 mb-0">
                  <div className="swiper-wrapper">
                  {galeriKegiatan && galeriKegiatan.data.map((item:any, index:number)=> (
                    <div className="swiper-slide" key={index}>
                      <img src={item.image} alt="cek"
                        className="h-fit inline-block" />
                    </div>
                    ))}
                  </div>
                </div>

                {/* <!-- Slider Navigation --> */}
                <div className="mt-6 flex justify-center space-x-3">
                  <div
                    className="swiper-button-prev swiper-button-prev-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-700 group-hover:fill-green-600">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                    </svg>
                  </div>
                  <div
                    className="swiper-button-next swiper-button-next-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-700 group-hover:fill-green-600">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </div>
                </div>

              </div>
              <div className="lg:w-2/5 w-full my-8 lg:my-0">
                <h2 className="mb-2 text-center font-display text-3xl text-jacarta-700 dark:text-white">Dokumen Produk</h2>
                <p className="text-center mb-16 text-jacarta-700 dark:text-white">Informasi dokumen produk yang kami miliki</p>
                <div className="">
                  <div className="mb-10 shrink-0 basis-8/12 p-2.5 space-y-5 lg:mb-0">
                  {dokumen && dokumen.map((item: any, index: number) => {
                    return (
                      <div
                      className="relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-7 transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                      key={index}
                      >
                      <div>
                        <h3 className="mb-2 font-display text-base font-semibold text-jacarta-700 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <button className="font-display text-sm font-semibold text-green-600">
                            {item.tgl_publish}
                          </button>
                        </div>
                      </div>
                    
                      
                        <div className="ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600">
                          <a href={`https://cms.depok.go.id/upload/file/${item.uploaddokumen}`} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-white">
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                    </div>
                    )
                  })}
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a href="/Publikasi/dokumen"
                    className="inline-block rounded-full bg-green-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark">Selengkapnya</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end promo 2 --> */}

        <section className="lg:py-24 lg:px-20 pb-5 py-5 px-4">
          <iframe src="https://dsw.depok.go.id/user/show_titikwifi" className="w-full h-[70rem] overflow-x-hidden"></iframe>
        </section>

        <section className="py-5 px-4 lg:py-8 lg:px-20">
          <div className="lg:flex">
            <div className="lg:w-3/4 w-full grid grid-cols-1 p-8">
              <a href="#"
                className="mb-8 rounded-2.5xl border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram p-2 rounded-lg mx-auto mb-7 -mt-[3.5rem] h-[3rem] w-[3rem] border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700 text-[#ff8ba7] dark:fill-white" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <h3 className="mb-3 font-display text-md text-jacarta-700 dark:text-white">INSTAGRAM</h3>
                <p className="dark:text-jacarta-300">
                  Informasi Kelurahan Kota Depok yang dipublikasikan melalui instagram
                </p>
              </a>
              <div className="relative">
                {/* <!-- Slider --> */}
                <div className="swiper card-slider-3-columns !py-5">
                  <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide">
                      <article>
                        <div
                          className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                          <figure>
                            <a href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".medsos"
                            target="_blank"
                            >
                              <img src="/img/infografis/ig.jpg" alt="item 1" width="230" height="230"
                                className="w-full rounded-[0.625rem]" loading="lazy" />
                            </a>
                          </figure>
                          <div className="mt-4 flex items-center justify-between">
                            <a href="#">
                              <span
                                className="font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white">Kunjungan Kerja Dinas..</span>
                            </a>
                            <span
                              className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                              <span className="text-sm font-medium tracking-tight text-green">#diskominfodepok</span>
                            </span>
                          </div>

                          <div className="mt-8 flex items-center justify-between">

                            <div className="flex items-center space-x-1">
                              <span
                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                data-tippy-content="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                  className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path
                                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                </svg>
                              </span>
                              <span className="text-sm dark:text-jacarta-200">159</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article>
                        <div
                          className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                          <figure>
                          <a href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".medsos"
                            target="_blank"
                            >
                              <img src="/img/infografis/ig2.jpg" alt="item 2" width="230" height="230"
                                className="w-full rounded-[0.625rem]" loading="lazy" />
                            </a>
                          </figure>
                          <div className="mt-4 flex items-center justify-between">
                            <a href="#">
                              <span
                                className="font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white">Kunjungan Kerja Komisi..</span>
                            </a>
                            <span
                              className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                              <span className="text-sm font-medium tracking-tight text-green">#diskominfodepok</span>
                            </span>
                          </div>

                          <div className="mt-8 flex items-center justify-between">

                            <div className="flex items-center space-x-1">
                              <span
                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                data-tippy-content="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                  className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path
                                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                </svg>
                              </span>
                              <span className="text-sm dark:text-jacarta-200">75</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article>
                        <div
                          className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                          <figure>
                          <a href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".medsos"
                            target="_blank"
                            >
                              <img src="/img/infografis/ig3.jpg" alt="item 6" width="230" height="230"
                                className="w-full rounded-[0.625rem]" loading="lazy" />
                            </a>
                          </figure>
                          <div className="mt-4 flex items-center justify-between">
                            <a href="#">
                              <span
                                className="font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white">Laporan Aduan Masyarakat..</span>
                            </a>
                            <span
                              className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                              <span className="text-sm font-medium tracking-tight text-green">#diskominfodepok</span>
                            </span>
                          </div>
                          
                          <div className="mt-8 flex items-center justify-between">

                            <div className="flex items-center space-x-1">
                              <span
                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                data-tippy-content="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                  className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path
                                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                </svg>
                              </span>
                              <span className="text-sm dark:text-jacarta-200">253</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article>
                        <div
                          className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                          <figure>
                          <a href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".medsos"
                            target="_blank"
                            >
                              <img src="/img/infografis/ig4.jpg" alt="item 4" width="230" height="230"
                                className="w-full rounded-[0.625rem]" loading="lazy" />
                            </a>
                          </figure>
                          <div className="mt-4 flex items-center justify-between">
                            <a href="#">
                              <span
                                className="font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white">Laporan Layanan</span>
                            </a>
                            <span
                              className="flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 dark:border-jacarta-600">
                              <span className="text-sm font-medium tracking-tight text-green">#diskominfodepok</span>
                            </span>
                          </div>

                          <div className="mt-8 flex items-center justify-between">

                            <div className="flex items-center space-x-1">
                              <span
                                className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                                data-tippy-content="Favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                  className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                  <path fill="none" d="M0 0H24V24H0z" />
                                  <path
                                    d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                </svg>
                              </span>
                              <span className="text-sm dark:text-jacarta-200">324</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>

                {/* <!-- Slider Navigation --> */}
                <div
                  className="swiper-button-prev swiper-button-prev-1 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    className="fill-jacarta-700 group-hover:fill-green-600">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                  </svg>
                </div>
                <div
                  className="swiper-button-next swiper-button-next-1 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    className="fill-jacarta-700 group-hover:fill-green-600">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full grid grid-cols-1 p-8">
              <div className="relative">
                <div className="rounded-2.5xl border border-jacarta-100 bg-white p-2">
                <h3 className="my-3 font-display text-center text-md text-jacarta-700 dark:text-white">Government Public Relation</h3>
                  <div dangerouslySetInnerHTML={{ __html: gprKominfoHTML }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Promo 2 --> */}
        <section className="py-5 px-4 lg:py-24 lg:px-20 pt-10">
          <div className="">
            <div className="lg:flex mb-4">
              <div className="lg:w-1/2">
                <h2 className="mb-2 text-center font-display text-3xl text-jacarta-700 dark:text-white">Pengumuman</h2>
                <p className="text-center mb-16 text-jacarta-700 dark:text-white">Informasi yang disajikan dalam bentuk grafis
                </p>
                {/* <!-- Slider --> */}
                <div className="swiper single-slider text-center mb-0">
                  <div className="swiper-wrapper">
                  {pengumuman && pengumuman.map((item: any, index: number) => {
                      return (
                    <div className="swiper-slide" key={index}>
                      <article>
                        <div className="relative overflow-hidden rounded-2.5xl mb-4 bg-white dark:bg-jacarta-700">
                          <figure className="relative">
                            <a href="/Publikasi/pengumuman"
                              className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
                              <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} alt="item 20"
                                className="w-full lg:h-96 object-cover brightness-50 transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                                height="290" width="959" />
                            </a>
                          </figure>
                          <div className="pointer-events-none absolute bottom-0 w-full p-5">
                            <h1
                              className="mb-4 text-center font-display text-3xl text-white dark:text-white md:text-left lg:text-3xl xl:text-4xl"
                            >
                              {item.title}
                            </h1>
                            <p className="text-center text-lg text-white dark:text-jacarta-200 md:text-left">
                            {item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '').slice(0, 100)}
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    )
                      })}
                  </div>
                </div>

                {/* <!-- Slider Navigation --> */}
                <div className="mt-6 flex justify-center space-x-3">
                  <div
                    className="swiper-button-prev swiper-button-prev-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-700 group-hover:fill-green-600">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                    </svg>
                  </div>
                  <div
                    className="swiper-button-next swiper-button-next-5 group z-10 !flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-700 group-hover:fill-green-600">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 m-2">
              <h2 className="mb-2 text-center mt-10 lg:mt-0 font-display text-3xl text-jacarta-700 dark:text-white">Agenda Diskominfo
                </h2>
                <p className="text-center mb-8 text-jacarta-700 dark:text-white">Pengumuman tentang Diskominfo baik kegiatan
                  maupun agenda terdekat yang akan diadakan di</p>
                  {agenda && agenda.slice(0, 1).map((item: any, index: number) => {
                  return (
                  <article className="mx-8" key={index}>
                    <div className="relative overflow-hidden rounded-2.5xl mb-4 bg-white dark:bg-jacarta-700">
                      <figure className="relative">
                        <a href="/Publikasi/agenda-kegiatan"
                          className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
                            {/* {item.Media ? `https://cms.depok.go.id/upload/gallery/${item.Media}` : '/img/kecamatan/dsw/kesehatan.png'} */}
                          <img src={item.Media ? `https://cms.depok.go.id/upload/event/${item.Media}` : '/img/kecamatan/dsw/kesehatan.png'}
                           alt="item 20"
                           className="w-full lg:h-72 object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                           height="290" width="959" />
                        </a>
                      </figure>
                      <div className="pointer-events-none absolute bottom-0 w-full p-5">
                        <h2 className="font-display text-2xl leading-none text-white">{item.Title}</h2>
                        <span className="text-2xs text-white">Upacara Kemerdekaan</span>
                      </div>
                    </div>
                  </article>
                  )
                    })}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-2 mx-8 md:gap-[1.875rem] lg:grid-cols-2">
                {agenda && agenda.slice(0, 2).map((item: any, index: number) => {
                  return (
                  <div
                  key={index}
                    className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-4 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                    <div className="flex-1 bg-white text-center dark:bg-jacarta-700">
                      <a href="/Publikasi/agenda-kegiatan">
                        <span className="block font-display text-lg lg:text-xl text-[#8DD059]">{item.TanggalAwal.replace(/<[^>]+>|&nbsp;|-/g, ' ').slice(0, 10)}</span>
                        <span className="block font-display text-sm text-jacarta-500 dark:text-white">{item.Title}</span>
                      </a>
                    </div>
                  </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end promo 2 --> */}

        <section className="overflow-hidden lg:py-8 lg:px-20 bg-teal-50 dark:bg-jacarta-800">
          <div className="">
            <div className="mx-auto mb-14 max-w-xl text-center">
              <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
                Channel Diskominfo
              </h2>
              <p className="text-lg dark:text-jacarta-300">
                video Diskominfo
              </p>
            </div>
          </div>
          <div className="relative">
            
            <div className="swiper card-slider-4-columns !py-5">
              <div className="swiper-wrapper">
              {channel && channel.map((item: any, index: number) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <article>
                            <a
                              href="#"
                              onClick={() => displayIframe(item.id.videoId)}
                              data-bs-toggle="modal"
                              target="_blank"
                            >
                            <div
                              className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                              <figure
                              className="relative overflow-hidden rounded-lg before:absolute before:inset-0 before:bg-jacarta-900/25"
                            >
                              <span className="js-video-modal-trigger absolute top-1/2 left-1/2 flex h-16 w-16 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  height="24"
                                  className="h-8 w-8 fill-white"
                                >
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                                  />
                                </svg>
                                </span>
                              <img src={item.snippet.thumbnails.default.url} className="h-44 w-full object-cover" alt="" />
                            </figure>
                              <div className="mt-7 flex items-center justify-between">                                    
                                <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">{item.snippet.title.slice(0, 54) + '..'}</span>
                              </div>
                              <div className="mt-2 text-sm">
                                <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">{item.snippet.description}</span>
                              </div>
                            </div>
                            </a>
                          </article>
                  </div>
                )
              })}
              </div>
            </div>

            <div
              className="swiper-button-prev swiper-button-prev-1 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 group-hover:fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
              </svg>
            </div>
            <div
              className="swiper-button-next swiper-button-next-1 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 group-hover:fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </div>
          </div>
        </section>

        {/* <!-- Collection --> */}
        <section className="relative lg:py-8 lg:px-20 py-5 px-4">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <h2 className="mb-2 text-center font-display text-3xl text-jacarta-700 dark:text-white">Berita & Artikel</h2>
          <p className="text-center mb-16 text-jacarta-700 dark:text-white">Berita terbaru seputar Diskominfo Depok</p>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="">
            {/* <!-- Tabs Nav --> */}
            <ul
              className="nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
              role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="on-sale-tab" data-bs-toggle="tab" data-bs-target="#on-sale" type="button" role="tab"
                  aria-controls="on-sale" aria-selected="true">
                  <span className="font-display text-base font-medium">Berita Diskominfo</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                  id="kota-tab" data-bs-toggle="tab" data-bs-target="#kota" type="button" role="tab" aria-controls="kota"
                  aria-selected="false">
                  <span className="font-display text-base font-medium">Berita Kota</span>
                </button>
              </li>
            </ul>

            <div className="tab-content">
              {/* <!-- On Sale Tab --> */}
              <div className="tab-pane fade show active" id="on-sale" role="tabpanel" aria-labelledby="on-sale-tab">
              <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                  {/* <!-- Posts --> */}
                  {berita && berita.slice(0, 3).map((item: any, index: number) => {
                    return (
                    <article key={index}>
                      <div className="overflow-hidden">
                        <figure className="group overflow-hidden">
                          <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}>
                            <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} alt="post 2"
                              className="h-80 w-full rounded-2xl object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105" />
                          </a>
                        </figure>
      
                        {/*  Body */}
                        <div
                          className="rounded-2xl relative m-5 bottom-24 border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                          {/*  Meta */}
                          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                            <a href="#"
                              className="font-display text-jacarta-700 hover:text-green-600 dark:text-jacarta-200">Sumber</a>
                            <span className="dark:text-jacarta-400">in</span>
                            <span className="inline-flex flex-wrap items-center space-x-1 text-green-600">
                                <a href="#">
                                    {item.sumber_informasi !== null && item.sumber_informasi !== '' ? item.sumber_informasi : item.Author}
                                </a>
                            </span>

                          </div>
      
                          <h2
                            className="mb-4 font-display text-xl text-jacarta-700 hover:text-green-600 dark:text-white dark:hover:text-green-600">
                            <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}> {item.title.slice(0, 38)} </a>
                          </h2>
                          <p className="mb-8 text-sm dark:text-jacarta-200">
                          {item.content.replace(/<[^>]+>|&nbsp;/g, '').slice(0, 100) + '...'}
                          </p>
      
                          {/*  Date / Time */}
                          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                            <span>{item.created_at.slice(0, 10)}</span>
                            <span>•</span>
                            <span>3 min read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    )
                  })}
                </div>
                {/* <!-- Load More --> */}
                <div className="mt-10 text-center">
                  <a href="/Publikasi/berita"
                    className="inline-block rounded-full bg-green-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark">Selengkapnya</a>
                </div>
              </div>
              {/* <!-- end on sale tab --> */}

              {/* <!-- kota Tab --> */}
              <div className="tab-pane fade" id="kota" role="tabpanel" aria-labelledby="kota-tab">
                <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
                  {/* <!-- Posts --> */}
                  {beritaKota && beritaKota.slice(0, 3).map((item: any, index: number) => {
                    return (
                      <article key={index}>
                      <div className="overflow-hidden">
                        <figure className="group overflow-hidden">
                          <a href={item.link} target="_blank">
                            <img src={item.image} alt="post 2"
                              className="h-80 w-full rounded-2xl object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105" />
                          </a>
                        </figure>
      
                        <div
                          className="rounded-2xl relative m-5 bottom-24 border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                          
                          <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                            <a href={item.link} target="_blank"
                              className="font-display text-jacarta-700 hover:text-green-600 dark:text-jacarta-200">Sumber</a>
                            <span className="dark:text-jacarta-400">in</span>
                            <span className="inline-flex flex-wrap items-center space-x-1 text-green-600">
                              <a href={item.link} target="_blank">Diskominfo</a>
                            </span>
                          </div>
      
                          <h2
                            className="mb-4 font-display text-xl text-jacarta-700 hover:text-green-600 dark:text-white dark:hover:text-green-600">
                            <a href={item.link} target="_blank"> {item.title.slice(0, 43) + '...'} </a>
                          </h2>
                          <p className="mb-8 text-sm dark:text-jacarta-200">
                          {item.description.slice(0, 100) + '...'}
                          </p>

                          <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                            <span>{item.published_at.slice(0, 10)}</span>
                            <span>•</span>
                            <span>3 min read</span>
                          </div>
                        </div>
                      </div>
                    </article>
                    )
                  })}
                </div>
                {/* <!-- Load More --> */}
                <div className="mt-10 text-center">
                  <a href="https://berita.depok.go.id/"
                    className="inline-block rounded-full bg-green-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark">Selengkapnya</a>
                </div>
              </div>
              {/* <!-- end kota tab --> */}
            </div>
          </div>
        </section>
        {/* <!-- end collection --> */}

        {/* <!-- Partners --> */}
        <div className="dark:bg-jacarta-800 bg-white py-5 px-4">
          <div className="px-4 py-4 xl:px-24">
            <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
              {client && client.map((item: any, index: number) => {
                return (
                <a href={item.URLMenu} target="_blank" className="justify-self-center" key={index}>
                  <img src={`https://cms.depok.go.id/upload/externalLogo/${item.ImageMenu}`} alt="gradient" className="p-5 h-32 lg:h-40 object-cover dark:hidden" />
                  <img src={`https://cms.depok.go.id/upload/externalLogo/${item.ImageMenu}`} alt="gradient dark" className="p-5 h-32 lg:h-40 object-cover hidden dark:block" />
                </a>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer profilSite={profilSite} visit={visit} />

      {/* <div className="fixed bottom-0 right-0 m-4 z-50">
        <a href="#"
          className="js-wallet group flex h-14 w-14 items-center justify-center rounded-full border border-jacarta-100 bg-green-600 transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-green-600 dark:hover:bg-green-600 dark:text-white" data-bs-toggle="modal" data-bs-target="#panggilanDarurat" aria-label="wallet">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-plus" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            <path fillRule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        </a>
      </div> */}

      {/* <!-- Search modal --> */}
      <div className="modal fade" id="walletModal" tabIndex={-1} aria-labelledby="walletModalLabel" aria-hidden="true">
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="walletModalLabel">Cari Berita</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  className="h-6 w-6 fill-jacarta-700 dark:fill-white">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6 text-center">
              {/* <!-- Search --> */}
              <form onSubmit={(e) => e.preventDefault()} className="relative ml-12 mr-8 basis-3/12">
                    <input type="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                          placeholder="Search" />
                    <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                      </svg>
                    </span>
                  </form>

                  <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-1 md:grid-cols-1 mt-10">
                    {currentBerita.slice(0, 1).map((item: any, index: number) => (
                      <article key={index}>
                        <div className="overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg">
                          <figure className="group overflow-hidden">
                            <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}>
                              <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} alt="post 2"
                                className="w-full object-cover transition-transform duration-[1600ms] h-60 will-change-transform group-hover:scale-105" />
                            </a>
                          </figure>

                          <div
                            className="rounded-b-[1.25rem] border border-t-0 border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700">
                            <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                              <a href="#"
                                className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"> Sumber </a>
                              <span className="dark:text-jacarta-400">in</span>
                              <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                                <a href="#">{item.sumber_informasi !== null && item.sumber_informasi !== '' ? item.sumber_informasi : item.Author}</a>
                              </span>
                            </div>

                            <h2
                              className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                              <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}> {item.title.slice(0, 48)} </a>
                            </h2>
                            <p className="mb-8 dark:text-jacarta-200">
                              {item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '').slice(0, 100) + '...'}
                            </p>

                            <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                              <span><time dateTime="2022-02-05">{item.created_at}</time></span>
                              <span>•</span>
                              <span>3 min read</span>
                            </div>
                          </div>
                        </div>
                      </article>
                      )
                      )}
                  </div>
            </div>
            {/* <!-- end body --> */}
          </div>
        </div>
      </div>

      {/* <!-- YouTube Video Modal --> */}
      {potensi && potensi.map((item: any, index: number) => {
        return (
          <div
            className={`modal fade video-lightbox js-video-lightbox video-lightbox-${item.Id}`} // Menggunakan kelas CSS
            tabIndex={-1}
            aria-label="Youtube Modal"
            aria-hidden="true"
            key={index}
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

          <div
            className={`modal fade video-lightbox js-video-lightbox medsos`} // Menggunakan kelas CSS
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
                <div className="bg-white border rounded-md shadow-sm p-1 mx-1 max-w-[540px] min-w-[326px] w-99.375vw">
                  <div className="p-4">
                    <a
                      href="https://www.instagram.com/p/CzbMHN2vPnE/?utm_source=ig_embed&amp;utm_campaign=loading"
                      className="block bg-white line-height-0 p-0 text-center text-decoration-none w-full"
                      target="_blank"
                    >
                      <div className="flex items-center">
                        <div className="bg-gray-300 rounded-full flex-grow-0 h-10 mr-4 w-10"></div>
                        <div className="flex flex-col flex-grow-1 justify-center">
                          <div className="bg-gray-300 rounded h-4 mb-2 w-32"></div>
                          <div className="bg-gray-300 rounded h-4 w-16"></div>
                        </div>
                      </div>
                      <div className="pt-19%"></div>
                      <div className="block h-50px mx-auto mb-12 w-50px">
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 60 60"
                          version="1.1"
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                        >
                          {/* SVG path goes here */}
                        </svg>
                      </div>
                      <div className="pt-8">
                        <div className="text-blue-500 font-semibold text-base">
                          View this post on Instagram
                        </div>
                      </div>
                      {/* Additional content goes here */}
                    </a>
                    <p className="text-gray-500 font-normal text-sm line-height-17px mb-0 mt-8 overflow-hidden px-8 py-7 text-center text-ellipsis whitespace-nowrap">
                      <a
                        href="https://www.instagram.com/p/CzbMHN2vPnE/?utm_source=ig_embed&amp;utm_campaign=loading"
                        className="text-gray-500 font-normal text-sm"
                        target="_blank"
                      >
                        A post shared by Diskominfo Kota Depok (@diskominfodepok)
                      </a>
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

      {showModal && (
        <div>
        <div className="modal-backdrop fade show block"></div>
        <div className="modal fade video-lightbox js-video-lightbox block" tabIndex={-1} aria-hidden="true" aria-label="Youtube Modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-6 w-6 fill-jacarta-700"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                  </svg>
                </button>
                <iframe
                  src={videoUrl}
                  width="1000"
                  height="600"
                  title="Video Modal"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}


      {layanan && layanan.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`modal fade video-lightbox js-video-lightbox video-lightbox-${item.content_id}`} // Menggunakan kelas CSS
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
                <div className="rounded-2.5xl bg-white p-12 dark:bg-jacarta-700">
                  <h2 className="mb-5 font-display text-3xl text-jacarta-700 dark:text-white">
                  {item.title}
                  </h2>
                  <p className="mb-8 text-lg leading-normal dark:text-jacarta-300">
                  {item.content.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="discord"
                        className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-2lg border-2 border-accent-lighter hover:border-accent hover:bg-accent"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 fill-accent group-hover:fill-white dark:group-hover:fill-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {channel && channel.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`modal fade video-lightbox js-video-lightbox video-lightbox-${item.Id}-${item.MediaType}`} // Menggunakan kelas CSS
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
                  <div>
                    <img src={item.Media ? `https://cms.depok.go.id/upload/gallery/${item.Media}` : '/img/kecamatan/dsw/kesehatan.png'} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Panggilan Darurat Modal */}
      <div className="modal fade" id="panggilanDarurat" tabIndex={-1} aria-labelledby="panggilanDaruratLabel" aria-hidden="true">
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="panggilanDaruratLabel">Panggilan Darurat</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  className="h-6 w-6 fill-white dark:fill-white">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6 text-center">
              <div
                className="rounded-2.5xl border border-jacarta-100 bg-white p-10 dark:border-jacarta-600 dark:bg-jacarta-700">
                <div className="mb-6 flex text-start space-x-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-400">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                    </svg>
                  </span>

                  <div className="text-start">
                    <span className="block font-display text-start text-base text-jacarta-700 dark:text-white">Layanan Panggilan Darurat</span>
                    <a href="tel:112" className="text-sm text-start hover:text-blue dark:text-jacarta-300">
                      112</a>
                  </div>
                </div>
                <div className="mb-6 flex items-center space-x-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-400">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                    </svg>
                  </span>

                  <div className="text-start">
                    <span className="block font-display text-start text-base text-jacarta-700 dark:text-white">Polisi</span>
                    <a href="tel:110" className="text-sm text-start hover:text-blue dark:text-jacarta-300">
                      110</a>
                  </div>
                </div>
                <div className="mb-6 flex items-center space-x-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-400">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                    </svg>
                  </span>

                  <div className="text-start">
                    <span className="block font-display text-start text-base text-jacarta-700 dark:text-white">Ambulance</span>
                    <a href="tel:119" className="text-sm text-start hover:text-blue dark:text-jacarta-300">
                      119</a>
                  </div>
                </div>
                <div className="mb-6 flex items-center space-x-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-400">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                    </svg>
                  </span>

                  <div className="text-start">
                    <span className="block font-display text-start text-base text-jacarta-700 dark:text-white">Pemadam Kebakaran</span>
                    <a href="tel:113" className="text-sm text-start hover:text-blue dark:text-jacarta-300">
                      113</a>
                  </div>
                </div>
                <div className="mb-6 flex items-center space-x-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="fill-jacarta-400">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                    </svg>
                  </span>

                  <div className="text-start">
                    <span className="block font-display text-start text-base text-jacarta-700 dark:text-white">Call Center PLN</span>
                    <a href="tel:123" className="text-sm text-start hover:text-blue dark:text-jacarta-300">
                      123</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end body --> */}
          </div>
        </div>
      </div>

    </div>
  );
};
// };

export default HomePage;
