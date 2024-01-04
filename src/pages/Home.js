import React, { useState } from "react";
import Explore from "../component/Explore";
import Learning from "../component/Learning";
import Recommended from "../component/Recommended";
import { useData } from "../mockData/DataContext";

const Home = () => {
  const { courses, setCourses } = useData();
  const [sort, setSort] = useState(true);

  const handleFilter = () => {
    if (sort) {
      const filteredCourses = [...courses].sort((a, b) => b.number - a.number);
      setCourses(filteredCourses);
      setSort(!sort);
    }
    if (!sort) {
      setCourses(useData.data);
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
    
  };
  return (
    <div>
      <Explore />
      <Learning courses={courses} />
      <Recommended
        courses={courses}
        handleFilter={handleFilter}
        enroll={enroll}
      />
    </div>
  );
};

export default Home;
