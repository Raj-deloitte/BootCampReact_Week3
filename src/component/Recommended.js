import React from "react";
import "./Recommended.css";
// import "./Card";
import Card from "../UI/Card.js";

const Recommended = ({ courses, handleFilter, enroll }) => {
  return (
    <>
      <div className="recommend">
        <div className="recommend_heading">
          <h2>Recommended For You</h2>
          <img
            src="./asset/Filter.svg"
            alt="pic of course"
            onClick={handleFilter}
            className="filter"
          ></img>
        </div>
        <div className="recommend_container">
          {courses.map((course, index) => (
            <Card key={index} {...course} enroll={enroll} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Recommended;
