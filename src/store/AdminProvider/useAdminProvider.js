import { useContext } from "react";
import { AdminContext } from "./AdminProvider";

const useAdminProvider = () => {
  return useContext(AdminContext);
};

export default useAdminProvider;
