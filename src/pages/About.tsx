import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="v-page-wrapper" id="about-page">
      <main className="v-main" id="v-page-main">
        <section className="v-about-hero" id="v-hero">
          <Header />
          <div className="v-main-hero">
            <div className="v-main-hero-content position-relative">
              <div className="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto d-flex flex-column text-center flex-grow-1 row-gap-3 position-relative mb-4">
                <div className="mx-auto" data-aos="fade-down">
                  <span className="v-subtext"> Welcome to </span>
                </div>
                <h1 className="v-hero-content-title v-main-text" style={{ display: 'ruby' }} data-aos="fade-down" data-aos-delay="300">
                  University Of Lagos Energy Club
                </h1>
                <div className="col-11 col-md-8 col-lg-7 mx-auto" data-aos="fade-down" data-aos-delay="400">
                  <span className="v-subtext" style={{ color: 'rgba(32, 32, 32, 1)' }}>
                    A student organisation dedicated to fostering an understanding and appreciation of the energy sector and energy-related issues among the University of Lagos
                    community
                  </span>
                </div>
              </div>
              <div className="v-city-presentation" role="presentation">
                <figure className="v-image v-city-presentation-inner">
                  <img src="/assets/media/images/about-hero.png" alt="" className="img-fluid w-100" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        
        <section className="v-platform" id="v-platform">
          <div className="v-platform-content position-relative">
            <div className="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto d-flex flex-column text-center flex-grow-1 row-gap-3 position-relative mb-4">
              <h5 className="v-hero-content-title v-main-text" style={{ color: 'rgba(32, 32, 32, 1)', fontWeight: 500 }} data-aos="fade-up">
                Meetings Platform
              </h5>
              <div className="row align-items-center justify-content-center">
                <div className="col-5 col-sm-3 col-md-3 col-lg-3" data-aos="fade-down" data-aos-delay="300">
                  <figure>
                    <img src="/assets/media/images/microsoft.png" alt="" className="img-fluid w-100" />
                  </figure>
                </div>
                <div className="col-5 col-sm-3 col-md-3 col-lg-3" data-aos="fade-down" data-aos-delay="400">
                  <figure>
                    <img src="/assets/media/images/google-meet.png" alt="" className="img-fluid w-100" />
                  </figure>
                </div>
                <div className="col-5 col-sm-3 col-md-3 col-lg-3" data-aos="fade-down" data-aos-delay="500">
                  <figure>
                    <img src="/assets/media/images/zoom.png" alt="" className="img-fluid w-100" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="v-reason" id="v-reason">
          <div className="container-xl px-xl-0">
            <div className="row row-gap-4 row-gap-md-5 justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="d-flex flex-column align-items-center align-items-lg-start row-gap-4">
                  <div className="text-center text-lg-start" data-aos="fade-right">
                    <span className="v-pre" style={{ color: 'rgba(167, 171, 182, 1)', fontWeight: 500 }}>
                      Who can get into Unilag Energy Club?
                    </span>
                  </div>
                  <h1 className="v-main-text col-lg-11 text-center text-lg-start" data-aos="fade-right" data-aos-delay="300">
                    Energy Club, Trusted Programs, and 100% Guaranteed
                  </h1>
                  <div className="col-lg-9 text-center text-lg-start" data-aos="fade-right" data-aos-delay="1100">
                    <span className="v-subtext" style={{ color: 'rgba(167, 171, 182, 1)', fontWeight: 600 }}>
                      Open to all students, faculty, and staff of the University of Lagos interested in energy matters. Members must register with the club and agree to its code
                      of conduct and objectives
                    </span>
                  </div>
                  <div className="v-action-link-container" data-aos="fade-down">
                    <a href="#" className="v-action-link">
                      More Detail{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <figure className="v-about-image" data-aos="fade-left">
                  <img src="/assets/media/images/reason.png" alt="" className="img-fluid w-100" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="v-club" id="v-club">
          <div className="container-xl px-xl-0">
            <div className="row row-gap-5 row-gap-md-5 justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="d-flex flex-column align-items-center align-items-lg-start row-gap-4">
                  <h1 className="v-main-text col-lg-11 text-center text-lg-start" data-aos="fade-right">
                    About Energy Club
                  </h1>
                  <div className="col-lg-9 text-center text-lg-start" data-aos="fade-right" data-aos-delay="300">
                    <span className="v-subtext" style={{ color: 'rgba(167, 171, 182, 1)' }}>
                      The club aims to serve as a platform for discussion, innovation, and collaboration on energy, sustainability, and the environment.
                    </span>
                  </div>
                  <div className="v-action-link-container" data-aos="fade-down" data-aos-delay="500">
                    <a href="#" className="v-action-link">
                      About Us{' '}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row row-gap-3">
                  <div className="col-12 col-sm-6">
                    <div className="club-box" data-aos="fade-down">
                      <div className="v-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.17786 19.9978H2.05286C0.948287 19.9978 0.0528564 19.1024 0.0528564 17.9978V10.1409C0.0528564 9.60318 0.269384 9.08811 0.653588 8.7119L2.30212 7.09766C2.68633 6.72145 2.90286 6.20638 2.90286 5.66866V2.32338H5.27786V4.18385L8.15359 1.36795C8.9311 0.606625 10.1746 0.606625 10.9521 1.36795L18.4521 8.7119C18.8363 9.08811 19.0529 9.60318 19.0529 10.1409V17.9978C19.0529 19.1024 18.1574 19.9978 17.0529 19.9978H13.9279C12.8233 19.9978 11.9279 19.1024 11.9279 17.9978V16.4164C11.9279 15.3118 11.0324 14.4164 9.92786 14.4164H9.17786C8.07329 14.4164 7.17786 15.3118 7.17786 16.4164V17.9978C7.17786 19.1024 6.28243 19.9978 5.17786 19.9978Z"
                            fill="#1E1E1E"
                          />
                        </svg>
                      </div>
                      <h5 className="v-main-text">School Facility</h5>
                      <span className="v-subtext">
                        To promote research and development in energy technologies and encourage practical problem-solving within the university
                      </span>
                      <div className="v-link-container">
                        <a className="v-link">More details</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="club-box" data-aos="fade-down" data-aos-delay="300">
                      <div className="v-icon">
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20.6588 17.617C20.6588 17.2829 20.388 17.0121 20.0539 17.0121H15.8331C15.9228 14.8284 16.4755 12.6133 17.0117 10.4651C17.6153 8.04734 18.2394 5.54731 18.2394 3.02022C18.2394 1.35268 16.8828 -0.00396729 15.2152 -0.00396729H3.03786C1.37032 -0.00396729 0.0136719 1.35268 0.0136719 3.02022C0.0136719 3.35425 0.284478 3.62506 0.618509 3.62506H4.83975C4.74995 5.80872 4.19701 8.02396 3.66072 10.1721C3.05713 12.5898 2.43302 15.0899 2.43302 17.617C2.43302 19.2845 3.78967 20.6411 5.45721 20.6411H17.6346C19.3021 20.6411 20.6588 19.2845 20.6588 17.617Z"
                            fill="#1E1E1E"
                          />
                          <circle cx="18.722" cy="18.1586" r="6.73835" fill="#1E1E1E" stroke="#F4F4F4" strokeWidth="2" />
                        </svg>
                      </div>
                      <h5 className="v-main-text">Top Level Courses</h5>
                      <span className="v-subtext">To raise awareness about the environmental impact of energy choices and promote sustainable practices</span>
                      <div className="v-link-container">
                        <a className="v-link">More details</a>
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

export default About
