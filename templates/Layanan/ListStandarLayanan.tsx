import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import DataTable from "datatables.net-dt";
import { useEffect } from "react";

const ListStandarLayanan = ( {listStandarPelayanan, profilSite, visit }: any ) => {
  // return JSON.stringify ( listStandarPelayanan )
  useEffect(() => {
    if(typeof window !== undefined) {
        new DataTable('#basic-1');
        new DataTable('#basic-2');
      }
  });
  
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
                List Standar Layanan
              </h1>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="../img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
          <div className="lg:flex mb-4">
          <div className="lg:w-2/6 w-full my-8 lg:my-0">
            <figure className="mb-8 md:flex-shrink-0 md:flex-grow-0 md:basis-auto">
                <img
                  src="/img/blog/Accept terms-cuate.png"
                  alt="item"
                  className="cursor-pointer rounded-2.5xl w-[25rem] h-[25rem] object-cover"
                  data-bs-toggle="modal"
                  data-bs-target="#imageModal"
                />
  
                <div className="modal fade" id="imageModal" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                    <img src="img/products/item_single_full.jpg" alt="item" />
                  </div>
  
                  <button
                    type="button"
                    className="btn-close absolute top-6 right-6"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-6 w-6 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                      />
                    </svg>
                  </button>
                </div>
              </figure>
  
              <div className="md:basis-auto md:pl-8 lg:p-4">
                <h1 className="mb-4 font-display text-2xl font-semibold text-jacarta-700 dark:text-white">Proses dan Prosedur Perizinan</h1>
  
                <p className="mb-10 dark:text-jacarta-300">
                  <span className="text-4xl text-accent">P</span>rosedur perizinan dapat meliputi prosedur pelayanan perizinan, proses penyelesaian perizinan yang merupakan proses internal yang dilakukan oleh aparat/petugas. Secara umum permohonan izin itu harus menempuh prosedur tertentu yang ditentukan oleh pemerintah, selaku pemberi izin.
                </p>

              </div>
          </div>
          <div className="lg:w-4/6 w-full my-8 lg:my-0">
            <div className="p-12">
              <table className="min-w-full" id="basic-1">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      No
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Dokumen
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                {listStandarPelayanan && listStandarPelayanan.map((item: any, index: number) => {
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
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" key={index}>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {index + 1}
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.title}
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
                    )
                  })}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
          </div>
        </section>
      </main>

      <Footer map={true} />
    </div>
  )
}

export default ListStandarLayanan;