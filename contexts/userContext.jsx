import { createContext, useState } from "react";

export const userContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
  });
  const [userLogin, setUserLogin] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser, userLogin, setUserLogin }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
