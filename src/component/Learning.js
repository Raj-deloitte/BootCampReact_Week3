import React from "react";
import "./Learning.css";
import LearningCard from "../UI/LearningCard";

const Learning = ({ initialcourses }) => {
  const existingEnrolled = initialcourses.filter((c) => c.isEnrolled);
  const totalEnroll = existingEnrolled.length;
  const courseToDisplay = existingEnrolled.slice(0, 2);
  // console.log(courseToDisplay);
  return (
    <>
      <div className="Learning_container">
        <div className="left_section">
          <div className="heading">
            <div className="c_learning">Continue Learning</div>
            <div className="see_all">See All</div>
          </div>
          {courseToDisplay.map((course, index) => (
            <LearningCard key={index} {...course} />
          ))}
        </div>
        <div className="right_section">
          <div className="status">Status</div>
          <div className="status_list">
            <div className="status_row">
              <img src="./asset/Status1.svg" alt=""></img>
              <div className="status_col2">{totalEnroll}</div>
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
