import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from 'react';

const BeritaTemp = ({ berita, categories, profilSite, visit  }: any) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredBerita = berita.filter((item: any) => {
    const categoryCondition = selectedCategory ? item.category === selectedCategory : true;
    const searchTermCondition = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryCondition && searchTermCondition;
  });

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const maxButtons = 3;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(startPage + maxButtons - 1, Math.ceil(filteredBerita.length / itemsPerPage));

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBerita = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);


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
                Berita
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
            <div className="my-4">
              <h3 className="font-display px-4 text-3xl text-jacarta-700 dark:text-white">Berita Terbaru</h3>
              <span className="text-md px-4 pb-2">Berita terbaru Diskominfo</span>
            </div>
          {berita.slice(0, 1).map((item: any) => {
            return (
              <article className="mb-[1.875rem] md:mb-16">
                <div className="flex flex-col overflow-hidden rounded-2.5xl transition-shadow hover:shadow-lg md:flex-row">
                  <figure className="group overflow-hidden md:w-1/2">
                    <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}>
                      <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'}
                        alt="post 1"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105" />
                    </a>
                  </figure>

                  <div
                    className="rounded-b-[1.25rem] border border-jacarta-100 bg-white p-[10%] dark:border-jacarta-600 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                    <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                      <a href="#" className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200">{item.Author}</a>
                      <span className="dark:text-jacarta-400">in</span>
                      <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                        <a href="#">NFT's</a>
                        <a href="#">DIGITAL ART</a>
                      </span>
                    </div>

                    <h2
                      className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl">
                      <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}> {item.title.slice(0, 38)} </a>
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
              );
            })}

            <div>
              <div className="my-4">
                <h3 className="font-display px-4 text-3xl text-jacarta-700 dark:text-white">List Berita</h3>
                <span className="text-md px-4 pb-2">Berita Diskominfo</span>
              </div>
              <div className="flex mb-4">
                <div className="w-3/4 mr-2">
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)} // Update kategori saat terjadi perubahan pada select
                        className="block w-full border border-jacarta-100 rounded-md py-1.5 p-1.5 text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-jacarta-300 dark:placeholder-white"
                      >
                        <option value="">Semua Kategori</option>
                        {categories.map((category: any) => (
                          <option key={category.Id} value={category.Id}>
                            {category.Category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-1/4">
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
                </div>
              </div>
            </div>
            

            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
              {currentBerita.map((item: any, index: number) => (
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
                          className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"> {item.Author} </a>
                        <span className="dark:text-jacarta-400">in</span>
                        <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                          <a href="#">NFT's</a>
                          <a href="#">DIGITAL ART</a>
                        </span>
                      </div>

                      <h2
                        className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent">
                        <a href={`/Publikasi/detail-berita/${item.slug_title}/${item.content_id}`}> {item.title.slice(0, 38)} </a>
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

            <div className="flex items-center justify-between border-t border-gray-200 my-5 bg-white px-4 py-3 sm:px-6 dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700 dark:text-white">
                    Showing
                    <span className="font-medium mx-1">{indexOfFirstItem + 1}</span>
                    to
                    <span className="font-medium mx-1">
                      {indexOfLastItem > filteredBerita.length ? filteredBerita.length : indexOfLastItem}
                    </span>
                    of
                    <span className="font-medium mx-1">{filteredBerita.length}</span>
                    results
                  </p>
                </div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => paginate(currentPage - 1)} // Fungsi untuk halaman sebelumnya
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
                  onClick={() => paginate(currentPage + 1)} // Fungsi untuk halaman selanjutnya
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                    indexOfLastItem >= filteredBerita.length ? 'hidden' : ''
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
    </div>
  )
}

export default BeritaTemp;