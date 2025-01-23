import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 w-100">
      <div className="container">
        <div className="row">
          {/* Cột 1: Logo và thông tin */}
          <div className="col-md-4 text-center mb-4">
            <a href="https://covuadaisy.com/">
              <img
                src="https://covuadaisy.com/wp-content/uploads/2024/04/footer.png"
                alt="Daisy Chess"
                className="img-fluid mb-3"
                style={{ maxWidth: "200px" }}
              />
            </a>
            <p>Top 5 CLB tốt nhất tại Đà Nẵng.</p>
            <div>
              <a
                href="https://www.facebook.com/CLBDaisyCoVua"
                className="text-light me-3"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@covuadaisy"
                className="text-light me-3"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTVBTYxBnCS4q5Lcu5_4fhw"
                className="text-light"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Cột 2: Địa chỉ và số điện thoại */}
          <div className="col-md-4 mb-4">
            <h5>Địa chỉ:</h5>
            <p>
              🏠 49 Thanh Lương 11, Hòa Xuân, Đà Nẵng.
              <br />
              🏠 338/55c Hoàng Diệu, Đà Nẵng.
            </p>
            <hr className="border-secondary" />
            <h5>Số điện thoại:</h5>
            <p>
              📞 0795.716.213 (Cô Huệ)
              <br />
              📞 07.08.02.4321 (Thầy Hậu)
            </p>
          </div>

          {/* Cột 3: Trang liên quan */}
          <div className="col-md-4 mb-4">
  <h5 className="text-uppercase mb-3">Trang liên quan</h5>
  <ul className="list-unstyled">
    <li className="mb-2">
      <a
        href="https://covuadaisy.com/khoa-hoc-online/"
        className="text-light text-decoration-none d-block"
      >
        <i className="fas fa-angle-right me-2"></i> Học trực tuyến
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://covuadaisy.com/khoa-hoc-online/"
        className="text-light text-decoration-none d-block"
      >
        <i className="fas fa-angle-right me-2"></i> Khoá học Online
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://covuadaisy.com/ve-daisy-chess/"
        className="text-light text-decoration-none d-block"
      >
        <i className="fas fa-angle-right me-2"></i> Thông tin CLB Daisy
      </a>
    </li>
    <li className="mb-2">
      <a
        href="https://covuadaisy.com/bai-viet/"
        className="text-light text-decoration-none d-block"
      >
        <i className="fas fa-angle-right me-2"></i> Bài viết
      </a>
    </li>
    <li>
      <a
        href="https://covuadaisy.com/dashboard/"
        className="text-light text-decoration-none d-block"
      >
        <i className="fas fa-angle-right me-2"></i> Hồ sơ cá nhân
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
