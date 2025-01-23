import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const TournamentDetails = () => {
  const [activeTable, setActiveTable] = useState(1); // Trạng thái hiển thị bảng (ván 1 hoặc ván khác)

  const matchesTable1 = [
    { board: 1, white: 'Bảo Khang', result: '1-0', black: 'Khải Minh' },
    { board: 2, white: 'Khánh Tường', result: '1-0', black: 'Đăng Nguyên' },
    { board: 3, white: 'Đăng Nhân', result: '0-1', black: 'Khôi Nguyên' },
  ];

  const matchesTable2 = [
    { board: 1, white: 'Minh Quang', result: '0-1', black: 'Hồ An Nhiên' },
    { board: 2, white: 'Hoàng Khánh', result: '0-1', black: 'Minh Sơn' },
    { board: 3, white: 'Phúc Khang', result: '1-0', black: 'Hữu Độ' },
  ];

  const rankings = [
    { rank: 1, name: 'Minh Sơn', points: 5.5 },
    { rank: 2, name: 'Khôi Nguyên', points: 5 },
    { rank: 3, name: 'Đăng Nhân', points: 4.5 },
    { rank: 4, name: 'Khải Minh', points: 4.5 },
    { rank: 5, name: 'Hải Phong', points: 4 },
    { rank: 6, name: 'Khánh Tường', points: 4 },
    { rank: 7, name: 'Hồ An Nhiên', points: 3.5 },
    { rank: 8, name: 'Bảo Khang', points: 3.5 },
    { rank: 9, name: 'Minh Hải', points: 3.5 },
    { rank: 10, name: 'Gia Anh', points: 3 },
    { rank: 11, name: 'Minh Khang', points: 3 },
    { rank: 12, name: 'Hoàng Khánh', points: 3 },
    { rank: 13, name: 'Phúc Khang', points: 3 },
  ];
  return (
    <div>
<Header/>
<div className="container py-5">
      {/* Phần tiêu đề trên cao */}
      <div
        className="text-center mb-5"
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: '#dc3545',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}
      >
        Giải đấu Ngày 21.12.2024
      </div>

      {/* Card chính */}
      <section
        className="mb-5"
        style={{
          background: '#000',
          color: '#fff',
          borderRadius: '15px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.2rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            background: '#333',
            display: 'inline-block',
            padding: '5px 15px',
            borderRadius: '20px',
            marginBottom: '15px',
            color: '#fff',
          }}
        >
          CLB Daisy Chess
        </div>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #ff7b54, #ffa726)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '15px 0',
          }}
        >
          Luyện tập
        </h1>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          21.12.2024
        </h2>
      </section>

      {/* Phần nội dung chi tiết */}
      <div className="row align-items-center justify-content-center text-center">
  {/* Cột ảnh */}
  <div className="col-md-4 mb-4 mb-md-0">
    <img
      src="https://covuadaisy.com/wp-content/uploads/2024/12/banner-6.png"
      alt="Daisy Chess"
      className="img-fluid rounded shadow"
      style={{ maxWidth: '100%' }}
    />
  </div>

  {/* Cột thông tin */}
  <div className="col-md-8">
    <h2 className="text-danger fw-bold mb-3">Thể thức thi đấu</h2>
    <ul className="list-unstyled">
      <li className="mb-3 d-flex align-items-center justify-content-center">
        <i className="bi bi-clock-fill me-2 text-danger"></i>
        <span className="fw-bold">Thời gian:</span> 10p+2s
      </li>
      <li className="mb-3 d-flex align-items-center justify-content-center">
        <i className="bi bi-bullseye me-2 text-primary"></i>
        <span className="fw-bold">Số ván:</span> 6 ván
      </li>
      <li className="d-flex align-items-center justify-content-center">
        <i className="bi bi-geo-alt-fill me-2 text-success"></i>
        <span className="fw-bold">Địa chỉ:</span> 49 Thanh Lương 11
      </li>
    </ul>
  </div>
</div>

<div className="border-top border-dark mb-4"></div>

      {/* Tiêu đề */}
      <h2 className="text-center text-warning fw-bold mb-4">
        Danh sách vận động viên
      </h2>

      {/* Danh sách */}
      <div className="row text-center">
        {/* Cột 1 */}
        <div className="col-md-4">
          <p>
            <strong>
              Lên Nam<br />
              Duy Anh<br />
              Hoàng Khánh<br />
              Minh Hải<br />
              Đăng Nguyên<br />
              Gia Bảo<br />
              Gia Anh
            </strong>
          </p>
        </div>
        {/* Cột 2 */}
        <div className="col-md-4">
          <p>
            <strong>
              Khánh Tường<br />
              Hải Phong<br />
              Khôi Nguyên<br />
              Minh Sơn<br />
              Minh Quang<br />
              Đăng Nhân<br />
              Bảo Khang
            </strong>
          </p>
        </div>
        {/* Cột 3 */}
        <div className="col-md-4">
          <p>
            <strong>
              Gia Thái<br />
              Minh Khang<br />
              Hồ An Nhiên<br />
              Tô An Nhiên<br />
              Linh Đan<br />
              Hữu Độ<br />
              Phúc Khang<br />
              Khải Minh
            </strong>
          </p>
        </div>
      </div>

    
      <div
      className="container py-5"
      style={{
        backgroundColor: '#001f3f', // Nền màu xanh đậm
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Tiêu đề "Các ván đấu" */}
      <h2 className="text-center text-warning fw-bold mb-4">Các ván đấu</h2>

      {/* Nút chuyển đổi ván đấu */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${activeTable === 1 ? 'btn-primary' : 'btn-success'} mx-1`}
            onClick={() => setActiveTable(1)}
          >
            Ván 1
          </button>
          <button
            type="button"
            className={`btn ${activeTable === 2 ? 'btn-primary' : 'btn-success'} mx-1`}
            onClick={() => setActiveTable(2)}
          >
            Ván 2
          </button>
        </div>
      </div>

      {/* Hiển thị bảng dựa trên trạng thái */}
      {activeTable === 1 && (
        <table className="table table-dark table-hover table-bordered text-center shadow-lg mb-0">
          <thead className="thead-dark">
            <tr>
              <th>BÀN</th>
              <th>QUÂN TRẮNG</th>
              <th>KẾT QUẢ</th>
              <th>QUÂN ĐEN</th>
            </tr>
          </thead>
          <tbody>
            {matchesTable1.map((match, index) => (
              <tr key={index} style={{ height: '3rem' }}>
                <td>{match.board}</td>
                <td>{match.white}</td>
                <td>{match.result}</td>
                <td>{match.black}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTable === 2 && (
        <table className="table table-dark table-hover table-bordered text-center shadow-lg mb-0">
          <thead className="thead-dark">
            <tr>
              <th>BÀN</th>
              <th>QUÂN TRẮNG</th>
              <th>KẾT QUẢ</th>
              <th>QUÂN ĐEN</th>
            </tr>
          </thead>
          <tbody>
            {matchesTable2.map((match, index) => (
              <tr key={index} style={{ height: '3rem' }}>
                <td>{match.board}</td>
                <td>{match.white}</td>
                <td>{match.result}</td>
                <td>{match.black}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

    <div
      className="container py-5 mt-3"
      style={{
        backgroundColor: '#001f2f', // Nền xanh đậm
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Tiêu đề bảng */}
      <h2 className="text-center text-primary fw-bold mb-4">Bảng Xếp Hạng</h2>

      {/* Bảng xếp hạng */}
      <table className="table table-dark table-bordered text-center">
        <thead>
          <tr style={{ backgroundColor: '#FB4141', color: '#fff' }}>
            <th>HẠNG</th>
            <th>TÊN</th>
            <th>ĐIỂM</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((player, index) => (
            <tr key={index} style={index % 2 === 0 ? { backgroundColor: '#2c2c2c' } : {}}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    </div>
<Footer/>

    </div>
  );
};

export default TournamentDetails;
