import React, { useState } from "react";
import "./Learning.css";
import LearningCard from "./LearningCard";

const Learning = () => {
  let initialaddedCourse = [
    {
      id: 10,
      url: "./asset/Learning1.svg",
      title: "Python Crash Course",
      desc: "20. Object-oriented Programming on Dart",
    },
    {
      id: 11,
      url: "./asset/Learning2.svg",
      title: "Android Development",
      desc: "10. Working with loops on Swift",
    },
    {
      id: 11,
      url: "./asset/Learning2.svg",
      title: "Android Development",
      desc: "10. Working with loops on Swift",
    },
  ];
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  return (
    <>
      <div className="Learning_container">
        <div className="left_section">
          <div className="heading">
            <div className="c_learning">Continue Learning</div>
            <div className="see_all">See All</div>
          </div>
          {
            (initialaddedCourse = initialaddedCourse
              .slice(0, 2)
              .map((course, index) => <LearningCard key={index} {...course} />))
          }
        </div>
        <div className="right_section">
          <div className="status">Status</div>
          <div className="status_list">
            <div className="status_row">
              <img src="./asset/Status1.svg" alt=""></img>
              <div className="status_col2">03</div>
              <div className="status_col3">
                Courses<br></br>Pending
              </div>
            </div>
            <div className="status_row">
              <img src="./asset/Status2.svg" alt=""></img>
              <div className="status_col2">12</div>
              <div className="status_col3">
                Courses<br></br>Completed
              </div>
            </div>
            <div className="status_row">
              <img src="./asset/Status3.svg" alt=""></img>
              <div className="status_col2">22</div>
              <div className="status_col3">
                Assesments<br></br>Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Learning;
