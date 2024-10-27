import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
const Header = () => {
  return (
    <>
      <header className="header-sticky header-absolute">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* Logo START */}
            <a className="navbar-brand me-0" href="">
              <img
                className="light-mode-item navbar-brand-item"
                src="/Image/logo/logo.svg"
                alt="logo"
              />
            </a>
            {/* Logo END */}
            {/* Main navbar START */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
                {/* Nav item */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Service">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Faqs">
                    Faqs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Main navbar END */}
            {/* Buttons */}
            <ul className="nav align-items-center dropdown-hover ms-sm-2">
              {/* Sign up button */}

              <li class="nav-item d-none d-sm-block">
                <Link to="/SignUp" class="btn btn-sm btn-light mb-0"><i class="bi bi-person-circle me-1"><IoPersonCircleOutline /></i>Sign up</Link>
              </li>

              {/* Responsive navbar toggler */}
              <li className="nav-item">
                <button
                  className="navbar-toggler ms-sm-3 p-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-animation">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </>
  );
};

export default Header;
