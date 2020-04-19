import React, { createContext, useState } from "react";

const isAdminLoggedIn = false;

export const AdminContext = createContext(isAdminLoggedIn);

const { Provider } = AdminContext;

const AdminProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminLoggedIn);

  const toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Provider
      value={{
        isAdminLoggedIn: isLoggedIn,
        toggleAdminLoginStatus: toggleIsLoggedIn
      }}
    >
      {children}
    </Provider>
  );
};

export default AdminProvider;
