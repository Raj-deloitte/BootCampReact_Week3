import React from "react";
import "./Learning.css";
import Button from "./Button";

export default function Learning() {
  return (
    <>
      <div className="Learning_container">
        <div className="left_section">
          <div className="heading">
            <div className="c_learning">Continue Learning</div>
            <div className="see_all">See All</div>
          </div>
          <div className="learning_card">
            <div>
              <img
                src="./asset/Learning1.svg"
                alt="logo"
                className="learning_1"
              />
            </div>
            <div className="learning_col2">
              <div className="learning_col2_row1">
                <div className="learning_col2_row1_heading">
                  Python Crash Course
                </div>
                <div className="learning_col2_row1_para">
                  20. Object-oriented Programming on Dart
                </div>
              </div>
              <div className="learning_col2_row2">
                <div>20/40 Lessons</div>
                <div>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="resume_btn">
              <Button type="success">Resume</Button>
            </div>
          </div>
          <div className="learning_card">
            <div>
              <img
                src="./asset/Learning2.svg"
                alt="logo"
                className="learning_1"
              />
            </div>
            <div className="learning_col2">
              <div className="learning_col2_row1">
                <div className="learning_col2_row1_heading">
                  Android Development
                </div>
                <div className="learning_col2_row1_para">
                  10. Working with loops on Swift
                </div>
              </div>
              <div className="learning_col2_row2">
                <div>10/40 Lessons</div>
                <div>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="resume_btn">
              <Button type="success">Resume</Button>
            </div>
          </div>
        </div>
        <div className="right_section">
          <div className="status">Status</div>
          <div className="status_list">
            <div className="status_row">
              <img src="./asset/Status1.svg" alt=""></img>
              <div className="status_col2">03</div>
              <div className="status_col3">Courses<br></br>Pending</div>
            </div>
            <div className="status_row">
              <img src="./asset/Status2.svg" alt=""></img>
              <div className="status_col2">12</div>
              <div className="status_col3">Courses<br></br>Completed</div>
            </div>
            <div className="status_row">
              <img src="./asset/Status3.svg" alt=""></img>
              <div className="status_col2">22</div>
              <div className="status_col3">Assesments<br></br>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
