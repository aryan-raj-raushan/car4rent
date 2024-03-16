import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carCollection, setCarCollection] = useState([]);

  return (
    <CarContext.Provider value={{ carCollection, setCarCollection }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
