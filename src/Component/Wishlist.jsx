import React from "react";

const Wishlist = () => {
  return (
    <div className="container">
      {/* Tiêu đề */}
      <h4 className="mb-4 fw-medium text-black">Danh sách yêu thích</h4>

      {/* Nội dung */}
      <div className="text-center p-4 border rounded bg-light">
        {/* Hình ảnh trống */}
        <img
          src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
          alt="Không có dữ liệu có sẵn trong phần này"
          className="img-fluid mb-3"
          style={{ maxWidth: "85%" }}
        />
        {/* Thông báo */}
        <p className="text-secondary mb-0">
          Không có dữ liệu có sẵn trong phần này
        </p>
      </div>
    </div>
  );
};

export default Wishlist;
