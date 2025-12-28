import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="v-page-wrapper">
      <main className="v-main" id="v-page-main">
        <section className="v-page-hero" id="v-hero">
          <Header />

          <div className="v-main-hero container-fluid">
            <div className="v-main-hero-content position-relative">
              <div className="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto d-flex flex-column text-center flex-grow-1 row-gap-3 position-relative mb-5">
                <div className="mx-auto" data-aos="fade-down">
                  <span className="v-subtext"> Join Us </span>
                </div>
                <h1 className="v-hero-content-title v-main-text" style={{ display: 'ruby' }} data-aos="fade-down" data-aos-delay="300">
                  University Of Lagos Energy Club
                </h1>
                <div className="col-11 col-md-8 col-lg-7 mx-auto" data-aos="fade-down" data-aos-delay="400">
                  <span className="v-subtext">
                    Promoting research and development in energy technologies and encourage practical problem-solving within the university.
                  </span>
                </div>
                <div className="mx-auto v-action-link-container mt-3" data-aos="fade-up" data-aos-delay="300">
                  <a href="#" className="v-action-link">
                    <span>Join Us</span>
                    <span className="v-icon v-arrow-cover">
                      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="currentColor"
                          d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                          strokeWidth="1.4"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                <figure data-aos="fade-up-right" data-aos-delay="500" className="v-each-float v-each-float-1 d-none d-lg-flex" style={{ '--duration': '60s' } as React.CSSProperties}>
                  <img src="/assets/media/images/float_1.png" alt="" className="img-fluid" />
                </figure>
                <figure data-aos="fade-down-left" data-aos-delay="500" className="v-each-float v-each-float-2 d-none d-lg-flex" style={{ '--duration': '30s' } as React.CSSProperties}>
                  <img src="/assets/media/images/float_2.png" alt="" className="img-fluid" />
                </figure>
                <figure data-aos="fade-up-left" data-aos-delay="500" className="v-each-float v-each-float-3 d-none d-lg-flex" style={{ '--duration': '40s' } as React.CSSProperties}>
                  <img src="/assets/media/images/float_3.png" alt="" className="img-fluid" />
                </figure>
              </div>

              <div className="v-board-presentation" role="presentation">
                <div className="v-board-details mx-auto mb-5">
                  <h5 className="v-main-text text-center" style={{ color: 'rgba(233, 194, 2, 1)' }} data-aos="fade-down">
                    BOARD OF DIRECTORS
                  </h5>

                  <ul className="v-social-links-icons d-flex align-items-center justify-content-center gap-4 mt-3">
                    <li className="v-each-icon" data-aos="fade-up">
                      <a href="#" className="v-icon-link">
                        <span className="v-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                              <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24" />
                              <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147" />
                              <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835" />
                              <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991" />
                              <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827" />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="v-each-icon" data-aos="fade-up" data-aos-delay="300">
                      <a href="#" className="v-icon-link">
                        <span className="v-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544q.591.371.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.286s.639 1.336.639 2.177c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.1 5.1 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35zm-.394 5.54c.541 0 .984-.148 1.328-.395s.492-.693.492-1.237c0-.297-.05-.594-.148-.791s-.246-.347-.442-.495a2.4 2.4 0 0 0-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.8 1.8 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.188-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81zm9.492-.05q.59.594 1.77.594c.541 0 1.033-.148 1.426-.395q.591-.446.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572c-.788.495-1.722.792-2.853.792a5.8 5.8 0 0 1-2.115-.396a3.9 3.9 0 0 1-1.574-1.088a3.9 3.9 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.3 5.3 0 0 1 1.033-1.682c.442-.445.983-.84 1.573-1.088a5.5 5.5 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93m3.098-5.194c-.344-.346-.885-.544-1.525-.544a2.34 2.34 0 0 0-1.082.247c-.295.149-.491.347-.688.545a1.3 1.3 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583M15.459 6.29h5.508v1.336H15.46z"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="v-each-icon" data-aos="fade-up" data-aos-delay="400">
                      <a href="#" className="v-icon-link">
                        <span className="v-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                              <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011" />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="v-each-icon" data-aos="fade-up" data-aos-delay="500">
                      <a href="#" className="v-icon-link">
                        <span className="v-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
                                clipRule="evenodd"
                              />
                              <path d="M7.2 8.809H4V19.5h3.2z" />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="v-our-member" id="v-our-member">
          <div className="container-lg">
            <div className="v-member my-4">
              <div className="row g-4 g-lg-5 align-items-center">
                <div className="col-12 col-lg-4">
                  <div className="v-detail-content h-100 d-flex flex-column row-gap-2 position-relative" data-aos="fade-right">
                    <span className="v-subtext">Let's promote</span>
                    <h2 className="v-main-text col-lg-7">Research and development</h2>
                    <span className="v-subtext"> In energy technologies... </span>

                    <figure className="v-each-float" data-aos="fade-down" data-aos-delay="500">
                      <img src="/assets/media/avatars/profile.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="v-member-details h-100 row row-gap-3" data-aos="fade-left" data-aos-delay="300">
                    <div className="col-12 col-lg-3">
                      <div className="v-member-content">
                        <h1 className="v-main-text text-center text-lg-center mb-3">Membership</h1>
                        <div className="col-lg v-subtext text-center text-lg-center">
                          <span>Open to all students, faculty, and staff of the University of Lagos interested in energy matters.</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-9">
                      <div className="v-member-item d-flex align-items-center flex-column flex-sm-row gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="v-member-list">
                            <h1 className="v-main-text">200+</h1>
                            <span className="v-subtext"> Complete Projects </span>
                          </div>
                          <div className="v-member-list">
                            <h1 className="v-main-text">1230</h1>
                            <span className="v-subtext"> Research problems </span>
                          </div>
                        </div>
                        <div className="v-action-link-container">
                          <a href="#" className="v-action-link">
                            <span>Join Us</span>
                            <span className="v-icon v-arrow-cover">
                              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                                  strokeWidth="1.4"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ backgroundColor: 'rgba(var(--section-bg-1), 1)', borderRadius: '30px' }}>
          <section className="v-about" id="v-about">
            <div className="container-xl px-xl-0">
              <div className="row row-gap-4 row-gap-md-5 align-items-center">
                <div className="col-lg-6">
                  <div className="d-flex flex-column align-items-center align-items-lg-start row-gap-4">
                    <h1 className="v-main-text" data-aos="fade-right">
                      About Us
                    </h1>
                    <div className="col-lg-9 text-center text-lg-start" data-aos="fade-right" data-aos-delay="300">
                      <span className="v-subtext">
                        The UNILAG Energy Club is a student organisation dedicated to fostering an understanding and appreciation of the energy sector and energy-related issues among
                        the University of Lagos community. The club aims to serve as a platform for discussion, innovation, and collaboration on energy, sustainability, and the
                        environment.
                      </span>
                    </div>
                    <div className="v-action-link-container" data-aos="fade-down" data-aos-delay="500">
                      <a href="/about" className="v-action-link">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <figure className="v-about-image text-center" data-aos="fade-left">
                    <img src="/assets/media/images/about.png" alt="" className="img-fluid" />
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section className="v-mission" id="v-mission">
            <div className="container-xl px-xl-0">
              <div className="row row-gap-4 row-gap-md-5 justify-content-between align-items-center">
                <div className="col-lg-6">
                  <div className="row row-gap-3">
                    <div className="col-12">
                      <figure className="v-about-image" data-aos="fade-down" data-aos-delay="300">
                        <img src="/assets/media/images/mission-2.png" alt="" className="img-fluid w-100" />
                      </figure>
                    </div>
                    <div className="row col-12 pe-0">
                      <div className="col-6 pe-0">
                        <figure className="v-about-image w-100" data-aos="fade-up" data-aos-delay="300">
                          <img src="/assets/media/images/mission-1.png" alt="" className="img-fluid w-100" />
                        </figure>
                      </div>
                      <div className="col-6 pe-0">
                        <figure className="v-about-image w-100" data-aos="fade-up" data-aos-delay="400">
                          <img src="/assets/media/images/mission-1.png" alt="" className="img-fluid w-100" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex flex-column align-items-center align-items-lg-start row-gap-4">
                    <h1 className="v-main-text text-center text-lg-start" data-aos="fade-down">
                      Our Mission
                    </h1>
                    <div className="mb-2 text-center text-lg-start" data-aos="fade-down" data-aos-delay="300">
                      <span className="v-subtext">
                        To cultivate innovation and prepare students to tackle the energy sector's challenges by equipping them with essential skills and knowledge, enlightening them
                        about the industry and its diverse career opportunities, and fostering professional connections.
                      </span>
                    </div>
                    <div className="v-action-link-container" data-aos="fade-down" data-aos-delay="500">
                      <a href="#" className="v-action-link">
                        <span>Join Us</span>
                        <span className="v-icon v-arrow-cover">
                          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                            <path
                              fill="none"
                              stroke="currentColor"
                              d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
                              strokeWidth="1.4"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="v-division" id="v-division">
          <div className="container-xl px-xl-0">
            <div className="row row-gap-4 row-gap-md-5 justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="d-flex flex-column align-items-center align-items-lg-start row-gap-4">
                  <div data-aos="fade-down">
                    <span className="v-pre">Our Divisions</span>
                  </div>
                  <h1 className="v-main-text text-center text-lg-start col-lg-11" data-aos="fade-right" data-aos-delay="300">
                    The University of Lagos Energy Club has three (3) divisions: the finance, Legal, and Technology divisions.
                  </h1>
                  <div className="text-center text-lg-start col-lg-9" data-aos="fade-right" data-aos-delay="400">
                    <span className="v-subtext">Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.</span>
                  </div>
                  <div className="v-action-link-container" data-aos="fade-down" data-aos-delay="500">
                    <a href="#" className="v-action-link">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <figure className="v-about-image" data-aos="fade-up" data-aos-delay="500">
                  <img src="/assets/media/images/divsion.png" alt="" className="img-fluid w-100" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="v-workers overflow-hidden" id="v-workers">
          <div className="container-lg p-0">
            <div role="heading" className="d-flex align-items-baseline justify-content-center justify-content-md-between mb-5 mb-md-0 as-header px-2">
              <h1 className="mb-2">Meet the Team</h1>
              <div>
                <h1 className="text-uppercase d-none d-md-inline-block v-title-r">at your service</h1>
              </div>
            </div>
            <div className="position-relative v-content-holder">
              <div className="v-content-holder-inner">
                <Splide
                  options={{
                    type: 'loop',
                    perPage: 1,
                    gap: '1rem',
                    focus: 'center',
                    drag: 'free',
                    pagination: false,
                    arrows: false,
                    autoScroll: {
                      speed: 0.4,
                    },
                  }}
                  extensions={{ AutoScroll }}
                >
                  <SplideSlide>
                    <div className="v-each-content-wrapper flex-column flex-md-row">
                      <figure className="v-content-image">
                        <img src="/assets/media/team/Ashinze Emmanuel_President-min.JPG" loading="lazy" alt="" className="img-fluid" />
                      </figure>
                      <div className="v-inner-content">
                        <div className="d-flex flex-column row-gap-2">
                          <h1>Ashinze Emmanuel</h1>
                          <h5>President, Unilag Energy Club.</h5>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quo vel voluptate id assumenda nesciunt facere ex odio earum quisquam possimus illo veniam iusto,
                            distinctio minima perspiciatis, nam nobis vitae deleniti commodi molestias, molestiae accusantium possimus debitis magni veritatis ipsa blanditiis?
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui itaque fuga illo? Atque esse ab alias, nam porro, deleniti commodi molestias, molestiae
                            accusantium possimus debitis magni veritatis ipsa blanditiis deleniti commodi molestias, molestiae accusantium possimus debitis magni veritatis ipsa
                            blanditiis?deleniti commodi molestias, molestiae accusantium possimus debitis magni veritatis ipsa blanditiis?
                          </p>
                        </div>
                        <ul className="v-each-content-socials d-flex align-items-center justify-content-start justify-content-md-start column-gap-2">
                          <li>
                            <a href="#" title="Twitter/X">
                              <span className="v-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.66"
                                    d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                                    color="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Instagram">
                              <span className="v-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                                    strokeWidth="0.5"
                                    stroke="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" title="LinkedIn">
                              <span className="v-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                                  <path
                                    fill="currentColor"
                                    d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                                    strokeWidth="0.5"
                                    stroke="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </section>

        <section className="v-testimonial" id="v-testimonial">
          <div className="v-main-testimonial">
            <div className="v-main-testimonial-content">
              <div className="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto d-flex flex-column text-center flex-grow-1 row-gap-3 position-relative mb-4">
                <div className="quote-left" data-aos="fade-right">
                  <svg width="59" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 48V31.9412C0 25.9412 1.05672 20.4118 3.17015 15.3529C5.28358 10.2941 8.86468 5.17647 13.9134 0L23.0716 7.2353C20.1363 10.1765 17.9055 12.9412 16.3791 15.5294C14.8527 18.1177 13.8547 20.7647 13.3851 23.4706H24.6567V48H0ZM34.3433 48V31.9412C34.3433 25.9412 35.4 20.4118 37.5134 15.3529C39.6269 10.2941 43.208 5.17647 48.2567 0L57.4149 7.2353C54.4796 10.1765 52.2488 12.9412 50.7224 15.5294C49.196 18.1177 48.198 20.7647 47.7284 23.4706H59V48H34.3433Z"
                      fill="#E9E9E9"
                    />
                  </svg>
                </div>
                <div className="mx-auto" data-aos="fade-down" data-aos-delay="300">
                  <span className="v-subtext" style={{ color: 'rgba(157, 157, 157, 1)', fontWeight: 500, fontSize: '1.1rem' }}>
                    What our members say
                  </span>
                </div>
                <h1 className="v-testimonial-content-title v-main-text" data-aos="fade-down" data-aos-delay="400">
                  Testimonial
                </h1>
                <div className="col-11 col-md-8 col-lg-7 mx-auto" data-aos="fade-down" data-aos-delay="500">
                  <span className="v-subtext" style={{ color: 'rgba(85, 85, 85, 1)', fontWeight: 500, fontSize: '1.1rem' }}>
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
                  </span>
                </div>
                <div className="mx-auto v-action-link-container mt-3" data-aos="fade-down" data-aos-delay="600">
                  <a href="#" className="v-action-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="211" viewBox="0 0 256 211">
                      <path fill="#00832d" d="m144.822 105.322l24.957 28.527l33.562 21.445l5.838-49.792l-5.838-48.669l-34.205 18.839z" />
                      <path fill="#0066da" d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059l-8.786-27.925l-29.11-8.786z" />
                      <path fill="#e94235" d="M59.984 0L0 59.984l30.876 8.765l29.108-8.765l8.626-27.545z" />
                      <path fill="#2684fc" d="M.001 150.679h59.983V59.983H.001z" />
                      <path
                        fill="#00ac47"
                        d="M241.659 25.398L203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781"
                      />
                      <path fill="#00ac47" d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z" />
                      <path fill="#ffba00" d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554" />
                    </svg>
                    Google Meet
                  </a>
                </div>
                <div className="col-11 col-md-8 col-lg-9 mx-auto mb-4" data-aos="fade-down" data-aos-delay="700">
                  <span className="v-subtext" style={{ color: 'rgba(32, 32, 32, 1)', fontSize: '1.95rem' }}>
                    Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde est
                  </span>
                </div>
                <div>
                  <h4 className="v-testimonial-user-name" style={{ color: 'rgba(2, 11, 31, 1)' }} data-aos="fade-up" data-aos-delay="300">
                    Larry Pageim Fred & Sergey Brin
                  </h4>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <span className="v-testimonial-user-position" style={{ color: 'rgba(2, 11, 31, 1)', fontSize: '0.96rem' }}>
                      Director of Communications and Engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="v-pre-end mb-5">
          <div className="row col-12 m-0 align-items-baseline justify-content-between row-gap-4">
            <div className="col-12 col-md-7">
              <div className="col-md-10">
                <h1 className="v-pre-end-content-title">What makes Unilag Energy Club distinctive?</h1>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column row-gap-3">
                <p>
                  At Unilag Energy Club, we combine bold ideas, powerful pedagogy, and collaborative cohort-based learning to deliver unparalleled management education and foster lifelong
                  learning networks.
                </p>
                <div>
                  <a href="#" className="text-dark d-flex align-items-center column-gap-2">
                    <b>More About Unilag Energy Club</b>
                    <span className="v-icon overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" style={{ '--size': '1.2rem' } as React.CSSProperties}>
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66" d="M7 7h10m0 0v10m0-10L7 17" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-12 m-0 mt-4 align-items-start justify-content-between row-gap-4">
            <div className="col-12 col-md-7">
              <ul className="v-grid-it">
                <li className="v-grid-item">
                  <b className="v-grid-item-title">Dynamic, immersive learning</b>
                  <p className="v-grid-item-text">
                    Here, exciting new ideas are discussed, debated, and explored through case-based teaching, participant-centered learning, and structured interactive engagements.
                  </p>
                </li>
                <li className="v-grid-item">
                  <b className="v-grid-item-title">Dynamic, immersive learning</b>
                  <p className="v-grid-item-text">
                    Here, exciting new ideas are discussed, debated, and explored through case-based teaching, participant-centered learning, and structured interactive engagements.
                  </p>
                </li>
                <li className="v-grid-item">
                  <b className="v-grid-item-title">Dynamic, immersive learning</b>
                  <p className="v-grid-item-text">
                    Here, exciting new ideas are discussed, debated, and explored through case-based teaching, participant-centered learning, and structured interactive engagements.
                  </p>
                </li>
                <li className="v-grid-item">
                  <b className="v-grid-item-title">Dynamic, immersive learning</b>
                  <p className="v-grid-item-text">
                    Here, exciting new ideas are discussed, debated, and explored through case-based teaching, participant-centered learning, and structured interactive engagements.
                  </p>
                </li>
                <li className="v-grid-item">
                  <b className="v-grid-item-title">Dynamic, immersive learning</b>
                  <p className="v-grid-item-text">
                    Here, exciting new ideas are discussed, debated, and explored through case-based teaching, participant-centered learning, and structured interactive engagements.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <figure className="v-post-image">
                <img src="/assets/media/images/1741281393475.jpeg" alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
