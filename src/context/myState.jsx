import { useContext, useState } from "react";
import MyContext from "./myContext";

export const MyState = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export const useMyState = () => useContext(MyContext);
