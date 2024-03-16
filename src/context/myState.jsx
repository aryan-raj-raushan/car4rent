import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyState = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [openSideNav, setOpenSideNav] = useState(false);
  

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        openSideNav,
        setOpenSideNav,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyState = () => useContext(MyContext);
