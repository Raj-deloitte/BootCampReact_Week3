import React from "react";
import "./Card.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = (props) => {
  const handleEnroll = () => {
    props.enroll(props.id);
    console.log(props.id);
  };

  let overlay_text = `overlay_text ${props.seat}`;
  return (
    <>
      <div className="card_container">
        <img
          src="./asset/recommend.svg"
          alt="code with harry"
          className="course_img"
        />
        <div className={overlay_text}>Seats Left : {props.number} of 30</div>

        <div className="course_title">
          {props.title}: <br></br>
          {props.subtitle}
        </div>
        <div className="course_row3">
          <div className="course_date">Updated on 04/12/2020</div>
          <div className="course_row3_col2">
            <img
              src="./asset/check-circle.svg"
              alt="pic"
              className="circle_check"
            />

            <div>3 Assessments</div>
          </div>
        </div>
        <div className="course_row4">
          <div className="course_row4_col">
            <img src="./asset/duration.svg" />
            <div>
              <div className="course_row4_col2_first">Course Duration</div>
              <div>40 Days</div>
            </div>
          </div>
          <div>
            <Link to={"/course/" + props.id}>
              <Button
                key={props.id}
                type={props.type}
                onClick={handleEnroll}
                isEnrolled={props.isEnrolled}
                seat={props.seat}
              >
                {props.isEnrolled ? "View Details" : "Enroll"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
