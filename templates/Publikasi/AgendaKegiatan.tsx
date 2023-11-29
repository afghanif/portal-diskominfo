"use client"
import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState } from 'react';

const AgendaKegiatan = ( {agenda, profilSite, visit }: any ) => {
  // return JSON.stringify ( agenda )
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Misalnya, 10 item per halaman

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Kembalikan ke halaman pertama setiap kali pencarian berubah
  };

  // Filter dokumen berdasarkan nilai pencarian
  const filteredAgenda = agenda.filter((item: any) => {
    return item.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Hitung dokumen yang harus ditampilkan sesuai halaman saat ini
  const maxButtons = 3; // Menentukan jumlah tombol yang ingin ditampilkan
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(startPage + maxButtons - 1, Math.ceil(filteredAgenda.length / itemsPerPage));

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAgenda = filteredAgenda.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />
      <Header site={false} />

      <main className="pt-[5.5rem] lg:pt-24">
        <section className="hero relative py-16 dark:bg-jacarta-800 bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-3xl text-jacarta-700 dark:text-white lg:text-3xl xl:text-4xl">
                Agenda Kegiatan
              </h1>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>

          <div className="container">
              <div className="lg:w-full w-full my-8 lg:my-0">
                  {agenda && agenda.slice(0, 1).map((item: any, index: number) => {
                  return (
                  <article>
                    <div className="relative overflow-hidden rounded-2.5xl mb-4 bg-white dark:bg-jacarta-700">
                      <figure className="relative">
                        <a href="item.html"
                          className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
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
                <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-2">
                {agenda && agenda.slice(0, 2).map((item: any, index: number) => {
                  return (
                  <div
                    className="flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                    <div className="flex-1 bg-white p-4 text-center dark:bg-jacarta-700">
                      <span className="block font-display text-xl text-[#8DD059]">{item.TanggalAwal.replace(/<[^>]+>|&nbsp;|-/g, ' ').slice(0, 10)}</span>
                      <span className="block font-display text-sm text-jacarta-500 dark:text-white">{item.Title}</span>
                    </div>
                  </div>
                    )
                  })}
                </div>
              </div>
              <h2 className="my-6 font-display text-xl text-jacarta-700 dark:text-white">Agenda</h2>
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
              
              {currentAgenda.map((item: any, index: number) => (
              <div className="mb-8">
                <div className="divide-jacarta-100 overflow-hidden rounded-lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                  <div
                    className="border-jacarta-100 pb-4 text-lg font-medium text-jacarta-700 dark:border-jacarta-600 dark:text-white"
                  >
                    {item.TanggalAwal.replace(/<[^>]+>|&nbsp;|-/g, ' ').slice(0, 10)}
                  </div>
                  <p className="dark:text-jacarta-300">{item.Title}</p>
                </div>
              </div>
             ))}

            <div className="flex items-center justify-between border-t border-gray-200 my-5 bg-white px-4 py-3 sm:px-6 dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700 dark:text-white">
                    Showing
                    <span className="font-medium mx-1">{indexOfFirstItem + 1}</span>
                    to
                    <span className="font-medium mx-1">
                      {indexOfLastItem > filteredAgenda.length ? filteredAgenda.length : indexOfLastItem}
                    </span>
                    of
                    <span className="font-medium mx-1">{filteredAgenda.length}</span>
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
                    onClick={() => paginate(Math.min(endPage + 1, Math.ceil(filteredAgenda.length / itemsPerPage)))} // Fungsi untuk halaman selanjutnya
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      indexOfLastItem >= filteredAgenda.length ? 'hidden' : ''
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

      <Footer profilSite={profilSite} visit={visit} />
    </>
  )
}

export default AgendaKegiatan;