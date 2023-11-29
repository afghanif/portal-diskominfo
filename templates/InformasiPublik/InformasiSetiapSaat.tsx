import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";

const InformasiSetiapSaat = ( {setiapSaat, profilSite, visit}: any ) => {
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
                Informasi Publik <span className="text-accent">Setiap Saat.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-24">
          <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
            <img src="../img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img src="../img/gradient_light.jpg" alt="gradient" className="h-full w-full" />
          </picture>
          <div className="container">
          
          {setiapSaat && setiapSaat.filter((sort: any) => sort.ParentId === null).reverse().map((item: any, index : number) => {
              const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
              const apiUrl = item.uploaddokumen
              ? `https://cms.depok.go.id/upload/file/${item.uploaddokumen}`
              : item.urlcontent;
              return (
                <div role="table"
                  className="w-full overflow-y-auto my-5 rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
                  <div className="sticky top-0 flex bg-light-base dark:bg-jacarta-600" role="row">
                    <div className="w-1 py-2 px-4" role="columnheader">
                      <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">{alphabet[index]}</span>
                    </div>
                    <div className="w-full py-2 px-4" role="columnheader">
                      <span className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">{item.title}</span>
                    </div>
                  </div>
                  {setiapSaat && setiapSaat.filter((sort: any) => sort.ParentId === item.content_id).reverse().map((parent : any, count : number) => {
                      return(
                        <>
                          <div className="flex" role="row">
                            <div
                              className="flex w-1 items-center whitespace-nowrap border-t border-jacarta-100 px-4 py-3 dark:border-jacarta-600"
                              role="cell">
                              {count+1}
                            </div>
                            <div className="flex w-3/4 items-center border-t border-jacarta-100 px-4 dark:border-jacarta-600" role="cell">
                              {parent.title}
                            </div>
                            <div
                              className="flex w-1/4 items-center whitespace-nowrap border-t border-jacarta-100 px-4 dark:border-jacarta-600"
                              role="cell">
                                <a href={apiUrl} download>
                                <button
                                  className="group mr-2.5 my-2.5 inline-flex items-center rounded-xl bg-white px-4 py-3 hover:border-transparent hover:bg-blue hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-blue">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                      d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                  </svg>
                                  <span className="text-2xs font-medium">Lihat</span>
                                </button>
                                </a>
                            </div>
                          </div>
                          {setiapSaat && setiapSaat.filter((indx: any) => indx.ParentId === parent.content_id).map((child : any, bet : number) => {
                              const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
                              return (
                                <div className="ml-12!" style={{ marginLeft: "50px" }}>
                                  <div className="flex" role="row">
                                    <div
                                      className="flex w-1 items-center whitespace-nowrap border-t border-jacarta-100 px-4 dark:border-jacarta-600"
                                      role="cell">
                                     {alpha[bet]}
                                    </div>
                                    <div className="flex w-3/4 items-center border-t border-jacarta-100 px-4 dark:border-jacarta-600" role="cell">
                                      {child.title}
                                    </div>
                                    <div
                                      className="flex w-1/4 justify-center items-center whitespace-nowrap border-t border-jacarta-100 px-4 dark:border-jacarta-600"
                                      role="cell">
                                      <a href={apiUrl} download>
                                      <button
                                        className="group mr-2.5 my-2.5 inline-flex items-center rounded-xl bg-white px-4 py-3 hover:border-transparent hover:bg-blue hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:hover:border-transparent dark:hover:bg-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                          className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                          <path fill="none" d="M0 0h24v24H0z" />
                                          <path
                                            d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                                        </svg>
                                        <span className="text-2xs font-medium">Lihat</span>
                                      </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )
                            
                          })}
                        </>
                      )
                  })}
                </div>
              )}
            )}

          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  )
}

export default InformasiSetiapSaat;