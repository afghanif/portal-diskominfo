"use client"
import Script from "next/script";
import React, { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

const LayananKota = ({ layananKota, profilSite, visit  }: any) => {
    
  const [videoUrl, setVideoUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const displayIframe = (url: string) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setShowModal(false);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Misalnya, 10 item per halaman

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Kembalikan ke halaman pertama setiap kali pencarian berubah
  };

  // Filter dokumen berdasarkan nilai pencarian
  const filteredLayanan = layananKota.filter((item: any) => {
    return item.TitleMenu.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Hitung dokumen yang harus ditampilkan sesuai halaman saat ini
  const maxButtons = 3; // Menentukan jumlah tombol yang ingin ditampilkan
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(startPage + maxButtons - 1, Math.ceil(filteredLayanan.length / itemsPerPage));

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDokumen = filteredLayanan.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />
      <Header site={false} />

      <main className="pt-[5.5rem] lg:pt-24">
        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
          <div className="mb-8 flex flex-wrap items-center justify-between">
                <ul className="flex flex-wrap items-center">
                  <li className="my-1 mr-2.5">
                    <a
                      href="#"
                      className="group flex h-9 items-center justify-center rounded-lg bg-jacarta-100 px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent"
                      >All</a
                    >
                  </li>
                  <li className="my-1 mr-2.5">
                    <a
                      href="#"
                      className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        />
                      </svg>
                      <span>Art</span>
                    </a>
                  </li>
                  <li className="my-1 mr-2.5">
                    <a
                      href="#"
                      className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                        />
                      </svg>
                      <span>Collectibles</span>
                    </a>
                  </li>
                  <li className="my-1 mr-2.5">
                    <a
                      href="#"
                      className="group flex h-9 items-center rounded-lg border border-jacarta-100 bg-white px-4 font-display text-sm font-semibold text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
                        />
                      </svg>
                      <span>Domain</span>
                    </a>
                  </li>
                  <li className="my-1 mr-2.5">
                    
                <div className="dropdown relative my-1 cursor-pointer">
                  <div
                    className="dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white"
                    role="button"
                    id="categoriesSort"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="font-display">Trending</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </div>

                  <div
                    className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                    aria-labelledby="categoriesSort"
                  >
                    <button
                      className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                    >
                      Trending
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-accent"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </button>
                    <button
                      className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                    >
                      Top
                    </button>

                    <button
                      className="dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                    >
                      Recent
                    </button>
                  </div>
                  </div>
                  </li>
                </ul>
                <div>
                  <form action="search" className="relative w-44">
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                      placeholder="Search"
                    />
                    <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                        />
                      </svg>
                    </span>
                  </form>
                </div>
              </div>
            <div
                className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10"
                >
                <div className="grid lg:gap-5 gap-2 grid-cols-2 md:grid-cols-4 mt-6">
                        {currentDokumen.map((item: any, index: number) => (
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
            <div className="flex items-center justify-between border-t border-gray-200 my-5 bg-white px-4 py-3 sm:px-6 dark:border-jacarta-700 dark:bg-jacarta-700">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700 dark:text-white">
                      Showing
                      <span className="font-medium mx-1">{indexOfFirstItem + 1}</span>
                      to
                      <span className="font-medium mx-1">
                        {indexOfLastItem > filteredLayanan.length ? filteredLayanan.length : indexOfLastItem}
                      </span>
                      of
                      <span className="font-medium mx-1">{filteredLayanan.length}</span>
                      results
                    </p>
                  </div>
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))} // Fungsi untuk halaman sebelumnya
                      className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                        currentPage === 1 ? 'hidden' : ''
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      Prev
                    </button>
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                      const pageNumber = startPage + index;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`relative dark:text-white inline-flex items-center px-4 py-2 text-sm font-semibold ${
                            currentPage === pageNumber ? 'bg-indigo-600 text-white' : 'text-gray-900'
                          } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => paginate(Math.min(endPage + 1, Math.ceil(filteredLayanan.length / itemsPerPage)))} // Fungsi untuk halaman selanjutnya
                      className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                        indexOfLastItem >= filteredLayanan.length ? 'hidden' : ''
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      Next
                    </button>
                  </nav>
                </div>
              </div>
          </div>
        </section>
      </main>

      {showModal && (
        <>
        <div className="modal-backdrop fade show" style={{ display: 'block' }}></div>
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
        </>
      )}

    <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default LayananKota;