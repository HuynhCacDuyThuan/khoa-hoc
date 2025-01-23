import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  return (
    <header className="w-100 shadow-sm">
      <div className=" d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <a href="https://covuadaisy.com/">
            <img
              src="https://covuadaisy.com/wp-content/uploads/2024/04/logo.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "70px" }}
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="d-none d-md-flex">
          <a className="nav-link text-danger mx-2" href="/">
            Trang Chủ
          </a>
          <a className="nav-link text-dark mx-2" href="/course">
            Khóa Học
          </a>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark mx-2"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Học
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="/da-nang"
                >
                  Học Cờ Vua tại Đà Nẵng
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://covuadaisy.com/khoa-trung-cap/"
                >
                  Lớp Online Trung Cấp
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://covuadaisy.com/khoa-hoc-nang-cao/"
                >
                  Lớp Online Nâng Cao
                </a>
              </li>
            </ul>
          </div>
          <a className="nav-link text-dark mx-2" href="/blog">
            Bài Viết
          </a>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark mx-2"
              href="#"
              id="aboutDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Về Daisy Chess
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/tournament">
                  Giải Đấu
                </a>
              </li>
            </ul>
          </div>
          {user ? (
       <a className="nav-link text-dark mx-2" href="/profile">
       Tài Khoản
     </a>
      ) : (
        <a className="nav-link text-dark mx-2" href="/login">
        Tài Khoản
      </a>
      )}
          
        </nav>

        {/* Social Icons */}
        <div className="d-none d-md-flex">
          <a
            href="https://www.facebook.com/CLBDaisyCoVua"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm mx-1"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.youtube.com/@daisycovua"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger btn-sm mx-1"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="d-md-none">
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="mobileMenu"
            aria-labelledby="mobileMenuLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="mobileMenuLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="nav-link text-danger" href="/">
                    Trang Chủ
                  </a>
                </li>
                <li className="mb-2">
                  <a className="nav-link text-dark" href="/course">
                    Khóa Học
                  </a>
                </li>
                <li className="mb-2">
                  <a className="nav-link text-dark" href="/blog">
                    Bài Viết
                  </a>
                </li>
                <li className="mb-2">
                  <a className="nav-link text-dark" href="/login">
                    Tài Khoản
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
