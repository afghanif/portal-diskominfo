import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header({ site = true }: any) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const triggerClick = (event : any) => {
    const getName = event.currentTarget.dataset.href
    console.log(getName);
    const targetTrigger = document.querySelector(getName) as HTMLElement;
    if (targetTrigger) {
      targetTrigger.click();
    }
  }
  return (
    <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
      <div className="flex items-center px-4 py-4 xl:px-24">
        <Link href="/" className="shrink-0">
          <img src="/img/about/Diskominfo-01.png" className="max-h-12 dark:hidden" alt="Kecamatan I Kota Depok" />
          <img src="/img/about/Diskominfo-02.png" className="hidden max-h-12 dark:block" alt="Kecamatan I Kota Depok" />
        </Link>

        <div className="js-mobile-menu invisible lg:visible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
          <div className="t-0 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 dark:bg-jacarta-800 lg:hidden">
            <Link href="/" className="shrink-0">
              <img src="/img/about/Diskominfo-01.png" className="max-h-10 dark:hidden" alt="Kecamatan I Kota Depok" />
              <img src="/img/about/Diskominfo-02.png" className="hidden max-h-10 dark:block" alt="Kecamatan I Kota Depok" />
            </Link>

            <button className="js-mobile-close group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600"
              aria-label="close mobile menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </button>
          </div>

          <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
            <input type="search"
              className="w-full rounded-2xl border border-jacarta-100 py-3 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-green-600 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
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

          <nav className="navbar w-full">
            <ul className="flex flex-col lg:flex-row">
              <li className="js-nav-dropdown group relative">
                <a href="#"
                  className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-600 hover:text-green-600 dark:text-white lg:px-5"
                  id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path fillRule="evenodd"
                      d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                      clipRule="evenodd" />
                  </svg>
                  &nbsp; Profil
                </a>
                <ul
                  className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                  aria-labelledby="navDropdown-4">
                  <li>
                    <Link href="/Profil/tentang-kami#tentang-kami" 
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" data-href="#tentang-kami-tab" onClick={triggerClick}>
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Tentang Kami</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/tentang-kami#visi"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" data-href="#visi-tab" onClick={triggerClick}>
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Visi & Misi</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/tentang-kami#landasan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" data-href="#landasan-tab" onClick={triggerClick}>
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Landasan Hukum</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/tentang-kami#struktur"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" data-href="#struktur-tab" onClick={triggerClick}>
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Struktur Organisasi</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/tentang-kami#tupoksi"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" data-href="#tupoksi-tab" onClick={triggerClick}>
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Tugas Pokok & Fungsi</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/maklumat-pelayanan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" >
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Maklumat Pelayanan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Profil/motto-pelayanan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600" >
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Motto Pelayanan</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="#"
                  className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white lg:px-5 "
                  id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path fillRule="evenodd"
                      d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                      clipRule="evenodd" />
                  </svg>
                  &nbsp; Informasi Publik
                </a>
                <ul
                  className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                  aria-labelledby="navDropdown-4">
                  <li>
                    <Link href="/Informasi-publik/informasi-berkala"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Informasi Secara Berkala</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Informasi-publik/informasi-serta-merta"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Informasi Serta Merta</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Informasi-publik/informasi-setiap-saat"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Informasi Setiap Saat</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="#"
                  className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white lg:px-5 "
                  id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path fillRule="evenodd"
                      d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                      clipRule="evenodd" />
                  </svg>
                  &nbsp;
                  Layanan
                </a>
                <ul
                  className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                  aria-labelledby="navDropdown-4">
                  <li>
                    <Link href="/Layanan/standar-layanan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Standar Pelayanan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Layanan/jenis-layanan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Jenis Layanan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Layanan/layanan-kota"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Layanan Kota</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Layanan/faq"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">FAQ</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="#"
                  className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white lg:px-5 "
                  id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path
                      d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969 15.974 15.974 0 001.271 3.341c.397.77 1.342 1 2.05.59l.867-.5c.726-.42.94-1.321.588-2.021-.166-.33-.315-.666-.448-1.004 1.8.358 3.511.964 5.096 1.78A17.964 17.964 0 0015 10c0-2.161-.381-4.234-1.08-6.155zM15.243 3.097A19.456 19.456 0 0116.5 10c0 2.431-.445 4.758-1.257 6.904l-.03.077a.75.75 0 001.401.537 20.902 20.902 0 001.312-5.745 1.999 1.999 0 000-3.545 20.902 20.902 0 00-1.312-5.745.75.75 0 00-1.4.537l.029.077z" />
                  </svg>
                  &nbsp;
                  Publikasi
                </a>
                <ul
                  className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                  aria-labelledby="navDropdown-4">
                  {/* <li>
                    <Link href="/Publikasi/dashboard-kecamatan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Dashboard Kecamatan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/dashboard-kelurahan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Dashboard Kelurahan</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/Publikasi/potensi-unggulan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Potensi Unggulan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/agenda-kegiatan"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Agenda Kegiatan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/infografis"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Galeri Kegiatan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/dokumen"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Dokumen Produk</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/pengumuman"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Pengumuman</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Publikasi/berita"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Berita & Artikel</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="group">
                <Link href="https://esop.depok.go.id/home/survey" target="_blank"
                  className="flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white dark:hover:text-white dark:focus:text-white lg:px-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path
                      d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                    <path
                      d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                  </svg>
                  &nbsp;
                  Indeks Kepuasan Masyarakat
                </Link>
              </li>
              <li className="js-nav-dropdown group relative">
                <a href="#"
                  className="dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-green-600 dark:text-white lg:px-5 "
                  id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"
                    style={{ marginTop: "-2px" }}>
                    <path
                      d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                  </svg>
                  &nbsp;
                  Hubungi
                </a>
                <ul
                  className="dropdown-menu group-hover:visible lg:invisible left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2"
                  aria-labelledby="navDropdown-4">
                  <li>
                    <Link href="/Hubungi/kontak"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">Kontak Kami</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://sigap.depok.go.id/report" target="_blank"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">SIGAP</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.lapor.go.id/" target="_blank"
                      className="flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                      <span className="font-display text-sm text-jacarta-700 dark:text-white">LAPOR</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="mt-10 w-full lg:hidden">
            <a href="#"
              className="js-wallet block w-full rounded-full bg-green-600 py-3 px-8 text-center font-semibold text-white shadow-green-600-volume transition-all hover:bg-green-600-dark"
              data-bs-toggle="modal" data-bs-target="#walletModal">
              Cari Informasi
            </a>

            <hr className="my-5 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />

            <div className="flex items-center justify-center space-x-5">
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-green-600 dark:group-hover:fill-white" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                  </path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-green-600 dark:group-hover:fill-white" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                  </path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-green-600 dark:group-hover:fill-white" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                    d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                  </path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-green-600 dark:group-hover:fill-white" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                  </path>
                </svg>
              </a>
              <a href="#" className="group">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok"
                  className="h-5 w-5 fill-jacarta-300 group-hover:fill-green-600 dark:group-hover:fill-white" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>

          <div className="ml-8 hidden lg:flex xl:ml-12">
            <a href="#"
              className="js-wallet group flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600 dark:text-white"
              data-bs-toggle="modal" data-bs-target="#walletModal" aria-label="wallet">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </a>

            {/* <div className="js-nav-dropdown group-dropdown relative">
              <button
                className="dropdown-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600"
                id="profileDropdown" aria-expanded="false" data-bs-toggle="dropdown" aria-label="profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                  className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
              </button>
              <div
                className="dropdown-menu group-dropdown-hover:visible lg:invisible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full group-dropdown-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
                aria-labelledby="profileDropdown">
                <a href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">English</span>
                </a>
                <a href="#"
                  className="flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-green-600 focus:text-green-600 dark:hover:bg-jacarta-600">
                  <span className="mt-1 font-display text-sm text-jacarta-700 dark:text-white">Indonesia</span>
                </a>
              </div>
            </div> */}

            <a href="#"
              className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-green-600 focus:border-transparent focus:bg-green-600 dark:border-transparent dark:bg-white/[.15] dark:hover:bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                className="dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-black group-focus:fill-black dark:hidden">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                className="dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="ml-auto flex lg:hidden">
          <Link href="#"
            className="js-dark-mode-trigger group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-white/[.15] transition-colors hover:bg-green-600 focus:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              className="dark-mode-light h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white dark:hidden">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              className="dark-mode-dark hidden h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white dark:block">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
            </svg>
          </Link>

          <button
            className="js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-white/[.15] transition-colors hover:bg-green-600 focus:bg-green-600"
            aria-label="open mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
              className="h-4 w-4 fill-white transition-colors group-hover:fill-white group-focus:fill-white">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
