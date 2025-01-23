import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("guest");

  // Lấy thông tin từ localStorage khi app khởi động
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserRole(user.role);
    }
  }, []);

  // Hàm cập nhật role và đồng bộ với localStorage
  const updateRole = (role) => {
    setUserRole(role);

    // Cập nhật vào localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      user.role = role;
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
  };

  return (
    <AuthContext.Provider value={{ userRole, updateRole }}>
      {children}
    </AuthContext.Provider>
  );
};
