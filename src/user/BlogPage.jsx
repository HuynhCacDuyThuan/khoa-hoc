import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      image: 'https://covuadaisy.com/wp-content/uploads/2024/08/anh-1-1024x576.png',
      category: 'Bên ngoài cờ vua',
      title: '16 Phong cách chơi cờ vua. Bạn thuộc kiểu nào? (Phần 1)',
      link: 'https://covuadaisy.com/16-phong-cach-choi-co-vua-ban-thuoc-kieu-nao-phan-1/',
      date: '19 Tháng Tám 2024',
      author: 'Daisy Cờ Vua',
      excerpt: 'Phong cách chơi cờ là cách mà một kỳ thủ tiếp cận và thực hiện các nước đi trong trò […]',
    },
    {
      id: 2,
      image: 'https://covuadaisy.com/wp-content/uploads/2024/04/giai-2024-1024x538.jpg',
      category: 'Sự kiện cờ vua',
      title: 'Các giải cờ vua Quốc Gia 2024',
      link: 'https://covuadaisy.com/cac-giai-co-vua-quoc-gia-2024/',
      date: '15 Tháng Tư 2024',
      author: 'Daisy Cờ Vua',
      excerpt: '1. Giải cờ vua Đồng bằng sông Cửu Long mở rộng. Thời gian: 13 tháng 2 đến ngày 16 tháng […]',
    },
    {
      id: 3,
      image: 'https://covuadaisy.com/wp-content/uploads/2024/04/436280630_412206624884643_5210839270509846141_n-1024x1024.jpg',
      category: 'Tổng kết giải',
      title: 'Tổng kết giải CLB Tài Năng Trẻ.',
      link: 'https://covuadaisy.com/tong-ket-giai-clb-tai-nang-tre-cung-daisy-chess/',
      date: '10 Tháng Tư 2024',
      author: 'Daisy Cờ Vua',
      excerpt: 'Vậy là sau 2 ngày thi đấu cờ nhanh và chớp, giải CLB TNT cũng đã khép lại với nhiều […]',
    },
  ];

  return (
   <div>
 <Header/>
 <div className="container mt-4">
      <div className="row">
        {/* Main Content Column */}
        <div className="col-md-9">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="card h-100 shadow border-0">
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body">
                    <span
                      className={`badge bg-${article.category === 'Bên ngoài cờ vua'
                        ? 'primary'
                        : article.category === 'Sự kiện cờ vua'
                        ? 'secondary'
                        : 'success'
                        } mb-2`}
                    >
                      {article.category}
                    </span>
                    <h5 className="card-title fw-bold">
                      <a
                        href={article.link}
                        className="text-dark text-decoration-none"
                      >
                        {article.title}
                      </a>
                    </h5>
                    <p className="text-muted small mb-2">
                      {article.author} / {article.date}
                    </p>
                    <p className="card-text">{article.excerpt}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="col-md-3">
  <div className="card mb-4 shadow border-0">
    <div className="card-body">
      <h5 className="fw-bold mb-4">Bài viết gần đây</h5>
      <ul className="list-unstyled mb-4">
        <li>
          <a
            href="https://covuadaisy.com/16-phong-cach-choi-co-vua-ban-thuoc-kieu-nao-phan-1/"
            className="text-decoration-none"
          >
            16 Phong cách chơi cờ vua. Bạn thuộc kiểu nào? (Phần 1)
          </a>
        </li>
        <li>
          <a
            href="https://covuadaisy.com/cac-giai-co-vua-quoc-gia-2024/"
            className="text-decoration-none"
          >
            Các giải cờ vua Quốc Gia 2024
          </a>
        </li>
        <li>
          <a
            href="https://covuadaisy.com/tong-ket-giai-clb-tai-nang-tre-cung-daisy-chess/"
            className="text-decoration-none"
          >
            Tổng kết giải CLB Tài Năng Trẻ.
          </a>
        </li>
      </ul>

      <h5 className="fw-bold mb-4">Chủ đề</h5>
      <ul className="list-unstyled mb-4">
        <li>
          <a
            href="https://covuadaisy.com/category/ben-ngoai-co-vua/"
            className="text-decoration-none"
          >
            Bên ngoài cờ vua
          </a>
        </li>
        <li>
          <a
            href="https://covuadaisy.com/category/su-kien-co-vua/"
            className="text-decoration-none"
          >
            Sự kiện cờ vua
          </a>
        </li>
        <li>
          <a
            href="https://covuadaisy.com/category/tong-ket-giai/"
            className="text-decoration-none"
          >
            Tổng kết giải
          </a>
        </li>
      </ul>

      <div className="mb-4">
        <figure>
          <a href="https://covuadaisy.com/khoa-trung-cap/">
            <img
              src="https://covuadaisy.com/wp-content/uploads/2024/08/banner-trung-cap-1.png"
              alt="Khoá học trung cấp"
              className="img-fluid rounded"
            />
          </a>
        </figure>
        <div className="text-center mt-3">
          <h5>
            <a
              href="https://covuadaisy.com/khoa-trung-cap/"
              className="text-decoration-none"
            >
              Khoá học cờ vua trung cấp
            </a>
          </h5>
        </div>
      </div>

      <div>
        <figure>
          <a href="https://covuadaisy.com/khoa-hoc-nang-cao/">
            <img
              src="https://covuadaisy.com/wp-content/uploads/2024/08/co-vua-daisy-1.png"
              alt="Khoá học nâng cao"
              className="img-fluid rounded"
            />
          </a>
        </figure>
        <div className="text-center mt-3">
          <h5>
            <a
              href="https://covuadaisy.com/khoa-hoc-nang-cao/"
              className="text-decoration-none"
            >
              Khoá học cờ vua nâng cao
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>


        </div>
      </div>
    </div>
 <Footer/>

   </div>
  );
};

export default BlogPage;
