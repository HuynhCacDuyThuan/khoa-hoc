import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ArticleDetail = () => {
  const [comments, setComments] = useState([]); // Lưu trữ các bình luận
  const [newComment, setNewComment] = useState(""); // Lưu nội dung bình luận mới

  // Xử lý gửi bình luận
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Thêm bình luận mới vào danh sách
      setNewComment(""); // Xóa nội dung trong ô nhập
    }
  };

  return (
    <div className="container my-5 p-4 bg-light rounded shadow">
      {/* Tiêu đề bài viết */}
      <header className="mb-4 text-center">
        <h1 className="fw-bold">Các giải cờ vua Quốc Gia 2024</h1>
        <p className="text-muted">
          By <a href="https://covuadaisy.com/author/covuadaisy-com/">Daisy Cờ Vua</a> / 15 Tháng Tư 2024
        </p>
      </header>

      {/* Hình ảnh chính */}
      <div className="mb-4 text-center">
        <img
          src="https://covuadaisy.com/wp-content/uploads/2024/04/giai-2024-1024x538.jpg"
          alt="Các giải cờ vua Quốc Gia 2024"
          className="img-fluid rounded shadow-lg"
        />
      </div>

      {/* Nội dung bài viết */}
      <section>
        {[
          {
            title: "Giải cờ vua Đồng bằng sông Cửu Long mở rộng",
            time: "13 tháng 2 đến ngày 16 tháng 2",
            location: "Đồng Tháp",
          },
          {
            title: "Giải cờ vua trẻ Miền Trung mở rộng",
            time: "17 tháng 2 đến ngày 21 tháng 2",
            location: "Đà Nẵng",
          },
          {
            title: "Giải cờ vua vô địch Quốc Gia",
            time: "01 tháng 03 đến ngày 11 tháng 3",
            location: "Hà Nội",
          },
        ].map((item, index) => (
          <div key={index} className="mb-4 p-3 bg-white rounded shadow-sm">
            <h4 className="fw-bold text-primary">{item.title}</h4>
            <p className="mb-0">
              <strong>Thời gian:</strong> {item.time}
            </p>
            <p>
              <strong>Địa điểm:</strong> {item.location}
            </p>
          </div>
        ))}
      </section>

      {/* Khu vực bình luận */}
      <div id="comments" className="comments-area mt-5">
        <h3 className="mb-4">Bình luận</h3>

        {/* Hiển thị các bình luận */}
        {comments.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-3">Bình luận ({comments.length})</h4>
            <ul className="list-group">
              {comments.map((comment, index) => (
                <li key={index} className="list-group-item">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Form bình luận */}
        <form onSubmit={handleCommentSubmit} className="p-4 bg-white rounded shadow-sm">
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Bình luận của bạn
            </label>
            <textarea
              id="comment"
              className="form-control"
              rows="4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Nhập bình luận của bạn..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Gửi bình luận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticleDetail;
