import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Gallery = () => {
  return (
    <div className="v-page-wrapper">
      <main className="v-main" id="v-page-main">
        <section className="v-page-hero" id="v-hero">
          <Header />
          <div className="py-5">
            <div className="container-fluid px-lg-5">
              <div className="v-link-container">
                <Link to="/" className="v-link d-flex align-items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="#000" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg>
                  <span style={{ color: 'rgba(19, 22, 35, 1)', fontSize: '1.35rem', fontWeight: 600 }}>Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="v-gallery py-5 p-4" id="v-gallery">
          <div className="container-fluid px-0">
            <div>
              <h5 className="milestone-title" data-aos="fade-right" data-aos-delay="300">
                Milestone 1
              </h5>
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="upload-box" data-aos="fade-down" data-aos-delay="400">
                            <div className="upload-icon">
                              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path
                                  opacity="0.4"
                                  d="M14.2499 15.8333C15.9988 15.8333 17.4166 14.4156 17.4166 12.6667C17.4166 10.9178 15.9988 9.5 14.2499 9.5C12.501 9.5 11.0833 10.9178 11.0833 12.6667C11.0833 14.4156 12.501 15.8333 14.2499 15.8333Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                />
                                <path
                                  d="M20.5834 3.16675H14.2501C6.33341 3.16675 3.16675 6.33341 3.16675 14.2501V23.7501C3.16675 31.6667 6.33341 34.8334 14.2501 34.8334H23.7501C31.6667 34.8334 34.8334 31.6667 34.8334 23.7501V15.8334"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                            <span className="upload-text">Add photos</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="upload-box" data-aos="fade-down" data-aos-delay="500">
                            <div className="upload-icon">
                              <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path
                                  opacity="0.4"
                                  d="M14.2499 15.8333C15.9988 15.8333 17.4166 14.4156 17.4166 12.6667C17.4166 10.9178 15.9988 9.5 14.2499 9.5C12.501 9.5 11.0833 10.9178 11.0833 12.6667C11.0833 14.4156 12.501 15.8333 14.2499 15.8333Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                />
                              </svg>
                            </div>
                            <span className="upload-text">Add photos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default Gallery
