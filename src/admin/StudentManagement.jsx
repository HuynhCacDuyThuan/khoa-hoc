import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyen Van A", dob: "2000-01-01", email: "a@gmail.com", phone: "0123456789" },
    { id: 2, name: "Tran Thi B", dob: "1999-05-10", email: "b@gmail.com", phone: "0987654321" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", dob: "", email: "", phone: "" });
  const [editingStudent, setEditingStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingStudent) {
      setEditingStudent({ ...editingStudent, [name]: value });
    } else {
      setNewStudent({ ...newStudent, [name]: value });
    }
  };

  const handleAddStudent = () => {
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    setStudents([...students, { id: newId, ...newStudent }]);
    setNewStudent({ name: "", dob: "", email: "", phone: "" });
    setShowModal(false);
  };

  const handleUpdateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      )
    );
    setEditingStudent(null);
    setShowModal(false);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý học viên</h3>

      {/* Nút mở modal thêm học viên */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={() => { setEditingStudent(null); setShowModal(true); }}>
          Thêm học viên
        </button>
      </div>

      {/* Modal thêm/sửa học viên */}
      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editingStudent ? "Sửa học viên" : "Thêm học viên"}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Họ và tên"
                      value={editingStudent ? editingStudent.name : newStudent.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      name="dob"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Ngày sinh"
                      value={editingStudent ? editingStudent.dob : newStudent.dob}
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      className="form-control mb-3 rounded-3 shadow-sm"
                      placeholder="Email"
                      value={editingStudent ? editingStudent.email : newStudent.email}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Số điện thoại"
                      value={editingStudent ? editingStudent.phone : newStudent.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary rounded-3" onClick={() => setShowModal(false)}>
                    Hủy
                  </button>
                  {editingStudent ? (
                    <button className="btn btn-warning rounded-3" onClick={handleUpdateStudent}>
                      Cập nhật
                    </button>
                  ) : (
                    <button className="btn btn-primary rounded-3" onClick={handleAddStudent}>
                      Thêm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Bảng thông tin học viên */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover rounded-3">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.dob}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2 rounded-3"
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      Xóa
                    </button>
                    <button
                      className="btn btn-warning btn-sm rounded-3"
                      onClick={() => handleEditStudent(student)}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Không có học viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;
