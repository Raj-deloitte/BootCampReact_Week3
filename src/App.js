import React, { useState } from "react";
import "./App.css";
import Explore from "./component/Explore";
import Learning from "./component/Learning";
import NavBar from "./component/NavBar";
import Recommended from "./component/Recommended";
import SideBar from "./component/SideBar";
import initialcourses from './mockData/Couses.json';



function App() {
  const [courses, setCourses] = useState(initialcourses.data);
  const [sort, setSort] = useState(true);

  const handleFilter = () => {
    console.log("clicked");
    if (sort) {
      const filteredCourses = [...courses].sort((a, b) => b.number - a.number);
      setCourses(filteredCourses);
      setSort(!sort);
    }
    if (!sort) {
      setCourses(initialcourses);
      setSort(!sort);
    }
  };
  const enroll = (courseId) => {
    const abc = [...courses];
    abc.forEach((course) => {
      if (course.id === courseId) {
        course.isEnrolled = true;
        course.number = Math.max(0, course.number - 1);
      }
    });
    setCourses(abc);
    console.log(abc);
  };

  return (
    <>
      <div className="app">
        <NavBar />
        <SideBar className="sticky_div" />
        <div className="main-container">
          <Explore />
          <Learning initialcourses={courses}/>
          <Recommended
            initialcourses={courses}
            handleFilter={handleFilter}
            enroll={enroll}
            setCourses={setCourses}
          />
        </div>
      </div>
    </>
  );
}

export default App;
