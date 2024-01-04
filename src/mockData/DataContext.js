import { createContext, useContext, useState } from "react";
import initialcourses from "../mockData/Couses.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialcourses);
  return (
    <DataContext.Provider value={{ courses, setCourses }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
