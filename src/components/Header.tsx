import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="v-header" id="v-page-header">
      <div className="container-lg">
        <div className="d-flex col-12 align-items-center justify-content-between m-0">
          <div>
            <Link to="/">
              <figure role="img" className="v-header-logo">
                <img src="/assets/media/logos/unilogo.png" alt="Unilag Energy Club" className="img-fluid" />
              </figure>
            </Link>
          </div>
          <div className="d-flex align-items-center column-gap-4">
            <div className="p-0 v-navbar">
              <ul className="v-links-wrapper d-flex align-items-center column-gap-1 d-lg-flex">
                <li className="v-nav-item">
                  <a href="#" className="v-nav-link v-main-text">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="v-action-container v-navbar">
              <a href="#" className="v-action v-nav-link column-gap-2">
                <span>Login</span>
                <span className="v-icon overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" style={{ '--size': '1.2rem' } as React.CSSProperties}>
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.66"
                      d="M7 7h10m0 0v10m0-10L7 17"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
