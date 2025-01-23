import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VoucherManagement = () => {
  const [vouchers, setVouchers] = useState([
    { id: 1, name: "Giảm giá 10%", quantity: 100 },
    { id: 2, name: "Miễn phí giao hàng", quantity: 50 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingVoucher, setEditingVoucher] = useState(null);

  const handleAddVoucher = () => {
    setEditingVoucher(null);
    setShowModal(true);
  };

  const handleEditVoucher = (voucher) => {
    setEditingVoucher(voucher);
    setShowModal(true);
  };

  const handleDeleteVoucher = (id) => {
    setVouchers(vouchers.filter((voucher) => voucher.id !== id));
  };

  const handleSaveVoucher = (newVoucher) => {
    if (editingVoucher) {
      setVouchers(
        vouchers.map((voucher) =>
          voucher.id === editingVoucher.id ? { ...editingVoucher, ...newVoucher } : voucher
        )
      );
    } else {
      const newId = vouchers.length > 0 ? vouchers[vouchers.length - 1].id + 1 : 1;
      setVouchers([...vouchers, { id: newId, ...newVoucher }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý Voucher</h3>

      {/* Nút thêm voucher */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={handleAddVoucher}>
          <i className="bi bi-plus-circle me-2"></i>Thêm voucher
        </button>
      </div>

      {/* Modal thêm/sửa voucher */}
      {showModal && (
        <VoucherModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveVoucher}
          voucher={editingVoucher}
        />
      )}

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Tên voucher</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.length > 0 ? (
              vouchers.map((voucher, index) => (
                <tr key={voucher.id}>
                  <td>{index + 1}</td>
                  <td>{voucher.name}</td>
                  <td>{voucher.quantity}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditVoucher(voucher)}
                    >
                      <i className="bi bi-pencil-square me-1"></i>Sửa
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteVoucher(voucher.id)}
                    >
                      <i className="bi bi-trash me-1"></i>Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Không có voucher nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VoucherModal = ({ show, onClose, onSave, voucher }) => {
  const [formState, setFormState] = useState(
    voucher || { name: "", quantity: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    if (formState.name && formState.quantity) {
      onSave({ ...formState, quantity: parseInt(formState.quantity, 10) });
    }
  };

  return (
    <>
      {show && <div className="modal-backdrop fade show"></div>}
    <div
    
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{voucher ? "Sửa voucher" : "Thêm voucher"}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Tên voucher</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Số lượng</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  value={formState.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Hủy
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VoucherManagement;
