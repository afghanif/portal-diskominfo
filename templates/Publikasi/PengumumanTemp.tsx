"use client"
import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { useEffect, useState } from 'react';

const PengumumanTemp = ({ pengumuman, categories, profilSite, visit  }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State untuk kategori yang dipilih
  const itemsPerPage = 8;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1); // Reset ke halaman pertama saat pencarian berubah
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(1); // Reset ke halaman pertama saat kategori berubah
    setSelectedCategory(event.target.value);
  };

  const filteredPengumuman = pengumuman.filter((item: any) => {
    const searchTermMatches = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatches = selectedCategory === '' || item.category === selectedCategory;
    return searchTermMatches && categoryMatches;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPengumuman = filteredPengumuman.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
                Pengumuman
              </h1>
            </div>
          </div>
        </section>

        <section className="py-24">
          <picture className="pointer-events-none absolute -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
            <div className="flex mb-4">
              <div className="w-3/4 mr-2">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="block w-full rounded-md border border-jacarta-100 py-1.5 p-1.5 text-gray-900 sm:max-w-xs sm:text-sm sm:leading-6 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-jacarta-300 dark:placeholder-white"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category: any, index: number) => (
                      <option key={index} value={category.Category}>
                        {category.Category} {/* Ubah ke properti yang sesuai */}
                      </option>
                    ))}
                  </select>
                  </div>
                </div>
              </div>
              <div className="w-1/4">
                <form action="search" className="relative ml-12 mr-8 basis-3/12">
                <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full rounded-2xl border border-jacarta-100 py-[0.6875rem] px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                    placeholder="Search"
                  />
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
            <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">

            {currentPengumuman.map((item: any, index: number) => (
                <article key={index}>
                  <div
                    className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link href={`/Publikasi/detail-pengumuman/${item.slug_title}/${item.content_id}`}>
                        <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} alt="item 5" className="w-full rounded-[0.625rem] max-h-48 object-cover"
                          loading="lazy" />
                      </Link>
                    </figure>
                    <div className="mt-7 flex items-center justify-between">
                      <Link href={`/Publikasi/detail-pengumuman/${item.slug_title}/${item.content_id}`}>
                        <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white">{item.title}</span>
                      </Link>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">{item.content.replace(/<[^>]+>|&nbsp;/g, '').slice(0, 100) + '...'}</span>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <button className="font-display text-sm font-semibold text-accent" data-bs-toggle="modal"
                        data-bs-target="#buyNowModal">
                        {item.tgl_publish}
                      </button>
                    </div>
                  </div>
                </article>
              ))}

            </div>
            <div className="flex items-center justify-between border-t border-gray-200 my-5 bg-white px-4 py-3 sm:px-6 dark:border-jacarta-700 dark:bg-jacarta-700">
              <div className="flex-1 justify-between sm:hidden">
                {/* Tombol Previous */}
                <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>

                {/* Tombol Next */}
                <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
              </div>

              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                {/* Menampilkan informasi jumlah data */}
                <p className="text-sm text-gray-700 dark:text-white">
                  Showing
                  <span className="font-medium mx-1">{indexOfFirstItem + 1}</span>
                  to
                  <span className="font-medium mx-1">
                    {indexOfLastItem > pengumuman.length ? pengumuman.length : indexOfLastItem}
                  </span>
                  of
                  <span className="font-medium mx-1">{pengumuman.length}</span>
                  results
                </p>

                {/* Pagination dengan tombol angka */}
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  {/* Tombol Previous */}
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    {/* Isi dengan ikon atau teks untuk navigasi halaman sebelumnya */}
                  </a>

                  {Array.from({ length: Math.ceil(pengumuman.length / itemsPerPage) }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <a
                        key={pageNumber}
                        href="#"
                        className={`relative dark:text-white inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          currentPage === pageNumber ? 'bg-indigo-600 text-white' : 'text-gray-900'
                        } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        onClick={() => paginate(pageNumber)}
                      >
                        {pageNumber}
                      </a>
                    );
                  })}

                  {/* Tombol Next */}
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    {/* Isi dengan ikon atau teks untuk navigasi halaman selanjutnya */}
                  </a>
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

export default PengumumanTemp;