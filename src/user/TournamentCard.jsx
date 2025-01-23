import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const TournamentCard = () => {
  return (
    <div>
        <Header/>
        <div className="container mt-5 mb-3">
      {/* Giải Đấu Noel 2024 */}
      <div className="card shadow-lg border-0 bg-dark text-white mb-5">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://covuadaisy.com/wp-content/uploads/2024/12/noel.png"
                alt="Noel 2024"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
              <h1 className="fw-bold text-danger mb-4">Giải Đấu Noel 2024</h1>
              <p className="fs-5 mb-3">
                <strong>Số vận động viên tham gia:</strong>{' '}
                <span className="text-warning">20</span>
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-warning me-2"></i>
                    <strong>Hạng 1:</strong> Minh Son
                  </h5>
                </li>
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-secondary me-2"></i>
                    <strong>Hạng 2:</strong> Hải Phong
                  </h5>
                </li>
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-bronze me-2"></i>
                    <strong>Hạng 3:</strong> Khải Minh
                  </h5>
                </li>
              </ul>
              <a
                href="/tournamentdetails"
                className="btn btn-outline-info btn-lg mt-4"
              >
                Thông tin chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giải luyện tập ngày 14.12.2014 */}
      <div className="card shadow-lg border-0 bg-dark text-white">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="https://covuadaisy.com/wp-content/uploads/2024/12/Nha-Vo-Dich-2-1024x341.png"
                alt="Giải luyện tập"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
              <h1 className="fw-bold text-primary mb-4">
                Giải luyện tập ngày 14.12.2014
              </h1>
              <p className="fs-5 mb-3">
                <strong>Số vận động viên tham gia:</strong>{' '}
                <span className="text-warning">21</span>
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-warning me-2"></i>
                    <strong>Hạng 1:</strong> Minh Son
                  </h5>
                </li>
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-secondary me-2"></i>
                    <strong>Hạng 2:</strong> Khôi Nguyên
                  </h5>
                </li>
                <li className="mb-2">
                  <h5>
                    <i className="bi bi-trophy-fill text-bronze me-2"></i>
                    <strong>Hạng 3:</strong> Đăng Nhân
                  </h5>
                </li>
              </ul>
              <a
                href="/tournamentdetails"
                className="btn btn-outline-info btn-lg mt-4"
              >
                Thông tin chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
  );
};

export default TournamentCard;
