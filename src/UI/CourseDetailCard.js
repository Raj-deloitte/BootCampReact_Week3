import React from "react";
import "./CourseDetailCard.css";
import Button from "./Button";
import { orange } from "@mui/material/colors";

const CourseDetailCard = () => {
  return (
    <div className="courseDetailCard">
      <div className="upper_part">
        If enrolled now the course will end on{" "}
        <span className="course_end_date">20 August 2022</span>
      </div>
      <hr></hr>
      <h5>This course includes:</h5>
      <div className="lower_part">
        <div className="courseDetail_row2">
          <img
            src="./asset/check-circle.svg"
            alt="pic"
            className="circle_check"
          />
          <div>3 Assessments</div>
        </div>
        <div className="courseDetail_row3">
          <i className="fa-solid fa-check"></i>
          <div>15 articles</div>
        </div>
        <div className="courseDetail_row3">
          <i className="fa-solid fa-check"></i>
          <div>4 downloadable resources</div>
        </div>
        <div className="btn_explore">
          <Button type="success">Enroll Now</Button>
        </div>
        <div className="courseDetail_row4">
          <div >Filling Fast </div>
          <div className="courseDetails_row4_col2">Seats left: 8 out of 20</div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseDetailCard;
