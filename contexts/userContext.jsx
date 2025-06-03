import { createContext, useState } from "react";

export const userContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState(false);
  const [profile, setProfile] = useState({});
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        setUserLogin,
        profile,
        setProfile,
        token,
        setToken,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
