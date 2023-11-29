import Script from "next/script";
import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import DataTable from "datatables.net-dt";

const ProfilePage = ({ profilSite, visit, image, tugasPokok: propsTugasPokok, landasanHukum, dataKepegawaian }: any) => {
  useEffect(() => {
    if(typeof window !== undefined) {
        new DataTable('#basic-1');
        new DataTable('#basic-2');
      }
  });
  

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.classList.add('show', 'active');
      }
    }
    const hashnew = window.location.hash;
    const idElement = `${hashnew}-tab`
    if (idElement) {
      const btn = document.querySelector(idElement);
      if (btn){
        console.log(btn);
        btn.classList.add('active')
      }
    }

  }, []);
  
    // return JSON.stringify ( dataKepegawaian )
  const [tugasPokok, setTugasPokok] = useState([]);

  useEffect(() => {
    // Check if the propStandarPelayanan is available and not empty before setting the state
    if (propsTugasPokok && propsTugasPokok.length > 0) {
      setTugasPokok(propsTugasPokok);
    } else {
      // Fetch data from your API here if propsTugasPokok is not available
      // For example, you can use fetch or any other method
    }
  }, [propsTugasPokok]);

  useEffect(() => {
    // Fetch data from your API here
    // For example, you can use fetch or any other method
    // Update the state with the API response
    // Replace the placeholder API_URL with your actual API endpoint
    fetch('API_URL')
      .then(response => response.json())
      .then(data => setTugasPokok(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  // return JSON.stringify ( struktur )

  return (
    <div>
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />
      <Header profilSite={profilSite} />

      <main className="pt-[5.5rem] lg:pt-24">

        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="/img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="/img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">

            <ul
              className="nav nav-tabs scrollbar-custom mb-12 lg:mb-0 flex items-center justify-start overflow-x-auto overflow-y-hidden border-jacarta-100 dark:border-jacarta-600"
              role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <button
                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-white dark:hover:text-white"
                    id="tentang-kami-tab" data-bs-toggle="tab" data-bs-target="#tentang-kami" type="button" role="tab"
                    aria-controls="tentang-kami" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="mr-1 h-5 w-5 fill-current">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <div>
                      <span
                        className="font-display font-semibold text-jacarta-700 hover:text-white dark:text-white">Tentang</span>
                      <span className="text-sm dark:text-jacarta-300">
                        <div className="date"></div>
                      </span>
                    </div>
                  </button>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <button
                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-white dark:hover:text-white"
                    id="visi-tab" data-bs-toggle="tab" data-bs-target="#visi" type="button" role="tab"
                    aria-controls="visi" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="mr-1 h-5 w-5 fill-current">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <div>
                      <span className="font-display font-semibold text-jacarta-700 hover:text-white dark:text-white">Visi &
                        Misi</span>
                      <span className="text-sm dark:text-jacarta-300">
                        <div className="date"></div>
                      </span>
                    </div>
                  </button>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <button
                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-white dark:hover:text-white"
                    id="landasan-tab" data-bs-toggle="tab" data-bs-target="#landasan" type="button" role="tab"
                    aria-controls="landasan" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="mr-1 h-5 w-5 fill-current">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <div>
                      <span className="font-display font-semibold text-jacarta-700 hover:text-white dark:text-white">Landasan Hukum</span>
                      <span className="text-sm dark:text-jacarta-300">
                        <div className="date"></div>
                      </span>
                    </div>
                  </button>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <button
                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-white dark:hover:text-white"
                    id="struktur-tab" data-bs-toggle="tab" data-bs-target="#struktur" type="button" role="tab"
                    aria-controls="struktur" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="mr-1 h-5 w-5 fill-current">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <div>
                      <span className="font-display font-semibold text-jacarta-700 hover:text-white dark:text-white">Struktur
                        Organisasi</span>
                      <span className="text-sm dark:text-jacarta-300">
                        <div className="date"></div>
                      </span>
                    </div>
                  </button>
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="nav-link mr-2.5 mb-2.5 rounded-t-xl bg-white border relative flex items-center whitespace-nowrap px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-accent">
                  <button
                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-white dark:hover:text-white"
                    id="tupoksi-tab" data-bs-toggle="tab" data-bs-target="#tupoksi" type="button" role="tab"
                    aria-controls="tupoksi" aria-selected="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      className="mr-1 h-5 w-5 fill-current">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z" />
                    </svg>
                    <div>
                      <span className="font-display font-semibold text-jacarta-700 hover:text-white dark:text-white">Tugas
                        Pokok</span>
                      <span className="text-sm dark:text-jacarta-300">
                        <div className="date"></div>
                      </span>
                    </div>
                  </button>
                </div>
              </li>
            </ul>

            <div className="tab-content">
              {/* <!-- On Sale Tab --> */}
              <div className="tab-pane fade" id="tentang-kami" role="tabpanel" aria-labelledby="tentang-kami-tab">
                {/* <!-- Testimonials --> */}
                <div
                  className="flex flex-wrap rounded-2.5xl bg-white dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
                  {/* <!-- Info --> */}
                  <div className="py-20 px-12 lg:w-[55%] lg:pl-16">
                      <div className="">
                        {/* <!-- Collection / Likes / Actions --> */}

                        <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">Tentang Kami
                        </h1>

                        <p className="mb-10 text-sm dark:text-jacarta-300" style={{ textTransform: 'lowercase' }}>
                          {profilSite.Description}
                        </p>

                        <hr />
                        <p className="mb-10 dark:text-jacarta-300">
                          Silahkan hubungi kami jika ada pertanyaan masukkan maupun keluhan.
                        </p>
                        <div className="flex space-x-2">
                          <a href="#"
                            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook"
                              className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path
                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                              </path>
                            </svg>
                          </a>
                          <a href="#"
                            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
                              className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                              </path>
                            </svg>
                          </a>
                          <a href="#"
                            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin"
                              className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path
                                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          </a>
                          <a href="mailto:test@gmail.com"
                            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="email"
                              className="h-4 w-4 fill-jacarta-400 transition-colors group-hover:fill-white dark:group-hover:fill-white"
                              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Image --> */}
                    <div className="lg:w-[45%]">
                      <div className="relative">
                        <img src="/img/about/GDPR-cuate.png" alt="" className="absolute w-full top-0 animate-fly" />
                      </div>
                    </div>
                </div>
              </div>
              {/* <!-- end on sale tab --> */}

              {/* <!-- Owned Tab --> */}
              <div className="tab-pane fade" id="visi" role="tabpanel" aria-labelledby="visi-tab">
                <div
                  className="flex flex-wrap rounded-2.5xl bg-white dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
                  <div className="lg:flex lg:justify-between">
                    <div className="py-20 lg:w-[55%] lg:pl-16">
                      <div className="">

                        <h1 className="mb-4 font-display text-4xl font-semibold text-jacarta-700 dark:text-white">Visi & Misi
                        </h1>

                        <h5 className="mb-2 font-semibold text-jacarta-700 dark:text-white">Visi</h5>
                        <p className="mb-10 dark:text-jacarta-300">
                          {profilSite.Visi}
                        </p>

                        <h5 className="mb-2 font-semibold text-jacarta-700 dark:text-white">Misi</h5>
                          <div dangerouslySetInnerHTML={{ __html: profilSite.Misi }} />
                      </div>
                    </div>
                    <div className="lg:w-[45%]">
                      <div className="relative">
                        <img src="/img/about/Enter OTP-cuate.png" alt="" className="animate-fly" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end owned tab --> */}

              {/* <!-- Created Tab --> */}
              <div className="tab-pane fade" id="landasan" role="tabpanel" aria-labelledby="landasan-tab">
                <div
                  className="flex flex-wrap rounded-2.5xl bg-white dark:bg-jacarta-700 md:flex-nowrap md:space-x-8 md:p-[4.25rem] lg:space-x-16">
                  <div className="container mx-auto">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <div className="p-4 border-b border-gray-200 shadow">
                          <table id="basic-2" className="p-4 dark:text-jacarta-300 w-full">
                            <thead className="bg-gray-50 dark:text-jacarta-300">
                              <tr>
                                <th className="p-8 text-xs ">
                                  No
                                </th>
                                <th className="p-8 text-xs ">
                                  Dokumen
                                </th>
                                <th className="p-8 text-xs ">
                                  Download
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-gray-50 dark:text-jacarta-300">
                            {landasanHukum && landasanHukum.map((item: any, index: number) => {
                              // Mendapatkan ekstensi file dari URL
                              const fileExtension = item.uploaddokumen.split('.').pop();
                              
                              // Fungsi untuk menentukan jenis file berdasarkan ekstensi
                              const getFileType = (extension: string) => {
                                if (extension === 'pdf') {
                                  return 'PDF';
                                } else if (extension === 'doc' || extension === 'docx') {
                                  return 'Word';
                                } else if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                                  return 'Image';
                                } else {
                                  return 'File'; // Untuk jenis file lainnya
                                }
                              };

                              return (
                                <tr className="whitespace-nowrap" key={index}>
                                  <td className="px-6 py-4 text-sm text-center text-gray-500">
                                    {index + 1}
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="text-base text-gray-900">
                                      {item.title.slice(0, 100) + '..'}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <a href={`https://cms.depok.go.id/upload/file/${item.uploaddokumen}`} download>
                                      <div className="flex place-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 mr-2 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                        </svg>
                                        <p className="text-base text-gray-900">
                                        {getFileType(fileExtension)}
                                        </p>
                                      </div>
                                    </a>
                                  </td>
                                </tr>
                              );
                            })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end created tab --> */}

              {/* <!-- Collections Tab --> */}
              <div className="tab-pane fade" id="struktur" role="tabpanel" aria-labelledby="struktur-tab">
                <div className="rounded-2.5xl bg-white dark:bg-jacarta-700 md:p-[4.25rem]">
                  <div className="container mx-auto">
                    {image && image.slice(0, 3).map((item: any, index: number) => {
                      return (
                        <img src={item.lampiran ? `https://cms.depok.go.id/upload/${item.lampiran}` : '/img/kecamatan/dsw/kesehatan.png'} className="mx-auto w-full"
                                    alt="team" />
                      );
                    })}
                    </div>
                    <div className="container mx-auto">
                      <div className="w-full">
                        <div className="p-4 border-b border-gray-200 shadow">
                          <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                  <table className="min-w-full" id="basic-1">
                                    <thead className="bg-white border-b">
                                      <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                          Nama Pegawai
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                          Instansi
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                          Jabatan
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                          Keterangan
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    {dataKepegawaian && dataKepegawaian.data.map((item: any, index: number) => {
                                     return (
                                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
  
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {item.nama_pegawai}
                                        </td>
  
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {item.instansi}
                                        </td>
  
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {item.jabatan}
                                        </td>
                                        
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                         {item.unit_kerja}
                                        </td>
  
                                      </tr>
                                        );
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              {/* <!-- end collections tab --> */}

              {/* <!-- Activity Tab --> */}
              <div className="tab-pane fade" id="tupoksi" role="tabpanel" aria-labelledby="tupoksi-tab">
                <div className="rounded-2.5xl bg-white dark:bg-jacarta-700 md:p-[4.25rem]">
                  <div className="container mx-auto">
                    <div className="w-full">
                      <div className="p-4 border-b shadow">
                        <table id="basic-6" className="p-4 bg-white dark:text-jacarta-300">
                          <thead className="bg-white dark:text-jacarta-300">
                            <tr>
                                <th className="p-8 text-xs ">
                                  Jabatan
                                </th>
                              <th className="p-8 text-xs ">
                                Tugas Pokok & Fungsi
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:text-jacarta-300">
                              {tugasPokok && tugasPokok.slice(0, 3).map((item: any, index: number) => {
                                return (
                                <tr className="transition-shadow shadow-md">
                                  <td className="text-center">{item.title.replace(/<[^>]+>|&nbsp;|-->.*$/g, '')}</td>
                                  <td className="my-4 py-4"><div key={index} dangerouslySetInnerHTML={{ __html: item.content }} /></td>
                                </tr>
                            );
                          })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end activity tab --> */}
            </div>
            
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default ProfilePage;