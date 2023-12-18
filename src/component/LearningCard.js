import React from "react";
import "./LearningCard.css";
import Button from "./Button";

const LearningCard = (props) => {
  const percentage = (props.progress / props.total) * 100;
  return (
    <>
      <div className="learning_card">
        <div>
          <img src={props.url} alt="logo" className="learning_1" />
        </div>
        <div className="learning_col2">
          <div className="learning_col2_row1">
            <div className="learning_col2_row1_heading">{props.title}</div>
            <div className="learning_col2_row1_para">{props.desc}</div>
          </div>
          <div className="learning_col2_row2">
            <div>
              {props.progress}/{props.total} Lessons
            </div>
            <div className="progress_bar_container">
              <div
                className="progress_bar"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="resume_btn">
          <Button type="success">Resume</Button>
        </div>
      </div>
    </>
  );
};
export default LearningCard;
