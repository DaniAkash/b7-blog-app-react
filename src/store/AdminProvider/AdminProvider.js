import React, { createContext, useState } from "react";

const isAdminLoggedIn = false;

export const AdminContext = createContext(isAdminLoggedIn);

const { Provider } = AdminContext;

const AdminProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminLoggedIn);

  const loginUser = () => setIsLoggedIn(true);

  const logoutUser = () => setIsLoggedIn(false);

  return (
    <Provider
      value={{
        isAdminLoggedIn: isLoggedIn,
        setAdminLoggedIn: loginUser,
        setAdminLoggedOut: logoutUser
      }}
    >
      {children}
    </Provider>
  );
};

export default AdminProvider;
