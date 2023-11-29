"use client"
import Script from "next/script";
import React, { useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

const SubLayananKota = ({ layananKota }: any) => {
    
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
            <div
                className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700 md:p-10"
                >
                <div className="grid lg:gap-5 gap-2 grid-cols-2 md:grid-cols-4 mt-6">
                {layananKota &&
                  layananKota
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

      <Footer map={true} />
    </div>
  )
}

export default SubLayananKota;