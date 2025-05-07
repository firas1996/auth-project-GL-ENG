import { createContext, useEffect, useState } from "react";

const AuthStore = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const x = localStorage.getItem("isLogged");
    if (x === "abc") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLogged", "abc");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogged");
  };
  return (
    <AuthStore.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
