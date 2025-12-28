import { FormEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="v-page-wrapper" id="about-page">
      <main className="v-main" id="v-page-main">
        <section className="v-about-hero" id="v-hero">
          <Header />
        </section>

        <section className="section v-contact" id="v-contact">
          <div className="background-element"></div>
          <div className="contact-container">
            <div className="form-section">
              <h1 className="mb-2 text-center text-lg-start" style={{ color: 'rgba(19, 22, 35, 1)' }} data-aos="fade-down">
                Contact Us
              </h1>
              <div className="mb-4 text-center text-lg-start" data-aos="fade-right" data-aos-delay="300">
                <span style={{ color: 'rgba(19, 22, 35, 1)' }}>Get in touch with us</span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label" data-aos="fade-down" data-aos-delay="400">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter full name" data-aos="fade-down" data-aos-delay="500" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label" data-aos="fade-down" data-aos-delay="600">
                    Email Address
                  </label>
                  <div className="input-group" data-aos="fade-down" data-aos-delay="700">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
                      </svg>
                    </span>
                    <input type="email" className="form-control" id="email" placeholder="seca@email.com" />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label" data-aos="fade-down" data-aos-delay="800">
                    Message
                  </label>
                  <textarea className="form-control message-area" id="message" placeholder="Enter message" data-aos="fade-down" data-aos-delay="900"></textarea>
                </div>

                <button type="submit" className="send-button">
                  SEND
                </button>
              </form>
            </div>

            <div className="upload-section">
              <div className="background-box-element"></div>
              <div className="upload-container" data-aos="fade-left" data-aos-delay="300">
                <div className="text-center">
                  <svg className="upload-icon" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path opacity="0.4" d="M14.2499 15.8333C15.9988 15.8333 17.4166 14.4156 17.4166 12.6667C17.4166 10.9178 15.9988 9.5 14.2499 9.5C12.501 9.5 11.0833 10.9178 11.0833 12.6667C11.0833 14.4156 12.501 15.8333 14.2499 15.8333Z" stroke="#292D32" strokeWidth="1.5" />
                    <path d="M20.5834 3.16675H14.2501C6.33341 3.16675 3.16675 6.33341 3.16675 14.2501V23.7501C3.16675 31.6667 6.33341 34.8334 14.2501 34.8334H23.7501C31.6667 34.8334 34.8334 31.6667 34.8334 23.7501V15.8334" stroke="#292D32" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="mb-0" style={{ color: 'rgba(42, 42, 42, 1)' }}>Upload photo</span>
                </div>
                <div>
                  <span className="upload-text" style={{ color: 'rgba(42, 42, 42, 1)' }}>accepted formats: jpeg, pdf, png</span>
                </div>
                <input type="file" className="d-none" id="fileUpload" accept=".jpg,.jpeg,.png,.pdf" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Contact
