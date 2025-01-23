import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PostManagement = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleAddPost = () => {
    setEditingPost(null);
    setShowModal(true);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowModal(true);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSavePost = (newPost) => {
    if (editingPost) {
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...editingPost, ...newPost } : post
        )
      );
    } else {
      const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
      setPosts([...posts, { id: newId, ...newPost }]);
    }
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-primary">Quản lý bài viết</h3>

      {/* Nút thêm bài viết */}
      <div className="text-end mb-3">
        <button className="btn btn-primary" onClick={handleAddPost}>
          <i className="bi bi-plus-circle me-2"></i>Thêm bài viết
        </button>
      </div>

      {/* Modal thêm/sửa bài viết */}
      {showModal && (
        <PostModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSavePost}
          post={editingPost}
        />
      )}

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên bài viết</th>
              <th>Tiêu đề</th>
              <th>Ngày đăng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <tr key={post.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid rounded"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{post.name}</td>
                  <td>{post.title}</td>
                  <td>{post.date}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditPost(post)}
                    >
                      <i className="bi bi-pencil-square me-1"></i>Sửa
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <i className="bi bi-trash me-1"></i>Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Không có bài viết nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PostModal = ({ show, onClose, onSave, post }) => {
  const [formState, setFormState] = useState(
    post || { image: "", name: "", title: "", date: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSave(formState);
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
              <h5 className="modal-title">{post ? "Sửa bài viết" : "Thêm bài viết"}</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Hình ảnh</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                  {formState.image && (
                    <img
                      src={formState.image}
                      alt="Preview"
                      className="img-fluid mt-2 rounded"
                    />
                  )}
                </div>
                <div className="col-12">
                  <label className="form-label">Tên bài viết</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Tiêu đề</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formState.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Ngày đăng</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={formState.date}
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

export default PostManagement;
