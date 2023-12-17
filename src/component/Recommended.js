import React, { useState } from "react";
import "./Recommended.css";
import "./Card";
import Card from "./Card";

const initialcourses = [
  { id: "01", type: "success", seat: "available", number: 20 },
  { id: "02", type: "success", seat: "limited", number: 10 },
  { id: "03", type: "error", seat: "over", number: 0 },
  { id: "04", type: "success", seat: "available", number: 20 },
  { id: "05", type: "success", seat: "limited", number: 10 },
  { id: "06", type: "error", seat: "over", number: 0 },
];
const Recommended = () => {
  const [courses, setCourses] = useState(initialcourses);
  const [sort, setSort] = useState(true);

  const handleFilter = () => {
    console.log("clicked");
    if (sort) {
      console.log("entererd if st");
      const filteredCourses = [...courses].sort((a, b) => b.number - a.number);
      setCourses(filteredCourses);
      setSort(!sort);
    }
    if(!sort){
      console.log("entered false sorting");
      setCourses(initialcourses);
      setSort(!sort);
    }
  };
  return (
    <>
      <div className="recommend">
        <div className="recommend_heading">
          <h2>Recommended For You</h2>
          <img
            src="./asset/Filter.svg"
            onClick={handleFilter}
            className="filter"
          ></img>
        </div>
        <div className="recommend_container">
          {courses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Recommended;
