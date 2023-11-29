import Script from "next/script";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = ( {layanan, profilSite, visit }: any ) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjek: '',
    pesan: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('https://cms.depok.go.id/ViewPortal/kotak_masuk?siteId=79', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Existing code */}
      <Script src="/js/countdown.bundle.js" />
      <Script src="/js/app.bundle.js" />
      <Header site={false} />

      <main className="pt-[5.5rem] lg:pt-24">
        <section className="hero relative py-16 dark:bg-jacarta-800 bg-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-3xl text-jacarta-700 dark:text-white lg:text-3xl xl:text-4xl">
                Kontak
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
            <div className="lg:flex">
              <div className="mb-12 lg:mb-0 lg:w-2/3 lg:pr-12">
                <h2 className="mb-4 font-display text-xl text-jacarta-700 dark:text-white">Kontak Kami</h2>
                <p className="mb-16 text-lg leading-normal dark:text-jacarta-300">
                  Punya pertanyaan? Butuh bantuan? Jangan ragu, hubungi kami
                </p>
                  <form onSubmit={handleSubmit}>
                    <div className="flex space-x-7">
                      <div className="mb-6 w-1/2">
                        <label htmlFor="name" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Name<span className="text-red">*</span></label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-blue/10 focus:ring-blue dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          id="name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="mb-6 w-1/2">
                        <label htmlFor="email" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Email<span className="text-red">*</span></label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-blue/10 focus:ring-blue dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                          id="email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="mb-1 block font-display text-sm text-jacarta-700 dark:text-white">Message<span className="text-red">*</span></label>
                      <textarea
                        value={formData.pesan}
                        onChange={handleTextareaChange}
                        className="contact-form-input w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-blue/10 focus:ring-blue dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                        required
                        name="pesan"
                        rows={5}
                      ></textarea>
                    </div>
                    {/* ...checkbox and submit button */}
                    <div className="mb-6 flex items-center space-x-2">
                      <input type="checkbox" id="contact-form-consent-input" name="agree-to-terms"
                        className="h-5 w-5 self-start rounded border-jacarta-200 text-blue checked:bg-blue focus:ring-blue/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600" />
                      <label htmlFor="contact-form-consent-input" className="text-sm dark:text-jacarta-200">I agree to the <a
                        href="tos.html" className="text-blue">Terms of Service</a></label>
                      </div>

                      <button type="submit" className="rounded-full bg-blue-900 py-3 px-8 text-center font-semibold text-white shadow-blue-volume transition-all hover:bg-blue-700" id="contact-form-submit">
                        Submit
                      </button>

                      <div id="contact-form-notice" className="relative mt-4 hidden rounded-lg border border-transparent p-4"></div>
                  </form>
                {/* Existing code */}
                </div>

              <div className="lg:w-1/3 lg:pl-5">
                <h2 className="mb-4 font-display text-xl text-jacarta-700 dark:text-white">Informasi</h2>
                <p className="mb-6 text-lg leading-normal dark:text-jacarta-300">
                  Jangan ragu, hubungi kami Mengelola saluran secara kolaboratif secara virtual. Secara obyektif gunakan
                  metrik yang dapat diskalakan dan layanan elektronik yang proaktif.
                </p>

                <div
                  className="rounded-2.5xl border border-jacarta-100 bg-white p-10 dark:border-jacarta-600 dark:bg-jacarta-700">
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

                    <div>
                      <span className="block font-display text-base text-jacarta-700 dark:text-white">Phone</span>
                      <a href="tel:123-123-456" className="text-sm hover:text-blue dark:text-jacarta-300">
                        (021) 29402276 dan (021) 7764410</a>
                    </div>
                  </div>
                  <div className="mb-6 flex items-center space-x-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        className="fill-jacarta-400">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                      </svg>
                    </span>

                    <div>
                      <span className="block font-display text-base text-jacarta-700 dark:text-white">Address</span>
                      <address className="text-sm not-italic dark:text-jacarta-300">Jl. Margonda Raya No. 54 Depok</address>
                    </div>
                  </div>
                  <div className="flex items-center space-x-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-jacarta-100 bg-light-base dark:border-jacarta-600 dark:bg-jacarta-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        className="fill-jacarta-400">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.029 0l9.238 5.545a.5.5 0 0 1 .243.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429zM4 8.133V19h16V8.132l-7.996-4.8L4 8.132zm8.06 5.565l5.296-4.463 1.288 1.53-6.57 5.537-6.71-5.53 1.272-1.544 5.424 4.47z" />
                      </svg>
                    </span>

                    <div>
                      <span className="block font-display text-base text-jacarta-700 dark:text-white">Email</span>
                      <a href="mailto:office@xhibiter.com"
                        className="text-sm not-italic hover:text-blue dark:text-jacarta-300">diskominfo@depok.go.id</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer profilSite={profilSite} visit={visit} />
    </div>
  );
};

const Kontak = ({ kontak }: any) => {
  return (
    <div>
      {/* ...existing code */}
      <ContactForm />
      {/* ...existing code */}
    </div>
  );
};

export default Kontak;
