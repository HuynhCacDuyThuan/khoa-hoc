import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const OrderHistory = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="container-fluid">
      {/* Tiêu đề */}
      <h5 className="mb-4 fw-medium text-center text-md-start">Lịch sử đơn hàng</h5>

      {/* Bộ lọc và trạng thái */}
      <div className="row align-items-start">
        {/* Cột nút chọn thời gian và trạng thái trống */}
        <div className="col-12 col-md-6 mb-4">
          <div className="d-flex flex-column align-items-start gap-3">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <button className="btn btn-outline-primary">Hôm nay</button>
              <button className="btn btn-primary">Hàng tháng</button>
              <button className="btn btn-outline-primary">Hàng năm</button>
            </div>

            {/* Trạng thái trống */}
            <div className="text-center mt-4 w-100">
              <img
                src="https://covuadaisy.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="Không có dữ liệu có sẵn trong phần này"
                style={{ maxWidth: "200px" }}
                className="img-fluid mx-auto"
              />
              <p className="text-muted mt-3">Không có dữ liệu có sẵn trong phần này</p>
            </div>
          </div>
        </div>

        {/* Cột lịch và input */}
        <div className="col-12 col-md-6">
          <div className="input-group mb-4">
            <span className="input-group-text bg-white">
              <i className="bi bi-calendar"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Select a date"
              value={selectedDay ? selectedDay.toLocaleDateString() : ""}
              readOnly
            />
          </div>

          <div className="bg-light rounded shadow-sm p-3">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
