import React from "react";
import "./LearningCard.css";
import Button from "./Button";
import { Link } from 'react-router-dom';

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
         <Link to="/course" > <Button type="success">Resume</Button></Link>
        </div>
      </div>
    </>
  );
};
export default LearningCard;
