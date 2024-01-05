import { createContext, useContext, useState } from "react";
import initialcourses from "../mockData/Couses.json";
// import desc from '../mockData/description.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialcourses);
  // const [desc,setDesc]=useState(desc);
  return (
    <DataContext.Provider value={{ courses, setCourses }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
