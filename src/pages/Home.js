import React, { useState } from "react";
import Explore from "../component/Explore";
import Learning from "../component/Learning";
import Recommended from "../component/Recommended";
import initialcourses from "../mockData/Couses.json";

const Home = () => {
  const [courses, setCourses] = useState(initialcourses.data);
  const [sort, setSort] = useState(true);

  const handleFilter = () => {
    if (sort) {
      const filteredCourses = [...courses].sort((a, b) => b.number - a.number);
      setCourses(filteredCourses);
      console.log("clicked filter once");
      setSort(!sort);
    }
    if (!sort) {
      setCourses(initialcourses.data);
      console.log("clicked filter twice");
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
    // console.log(abc);
  };
  return (
    <div>
      <Explore />
      <Learning initialcourses={courses} />
      <Recommended
        initialcourses={courses}
        handleFilter={handleFilter}
        enroll={enroll}
        setCourses={setCourses}
      />
    </div>
  );
};

export default Home;
