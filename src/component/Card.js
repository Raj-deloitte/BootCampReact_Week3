import React, { useState } from "react";
import "./Card.css";
import Button from "./Button";


const Card=(props)=> {
  const [enroll,setEnroll]=useState(false);
  const handleClick=()=>{
    setEnroll(!enroll);
  }
  let overlay_text=`overlay_text ${props.seat}`;
  return (
    <>
      <div className="card_container">
        <img
          src="./asset/recommend.svg"
          alt="course_pic"
          className="course_img"
        />
        <div className={overlay_text}>Seats Left : {props.number} of 30</div>

        <div className="course_title">
          Java Tutorial for Begineers: <br></br>Learn Core
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
            <div  className="course_row4_col2_first">Course Duration</div>
            <div>40 Days</div></div>
          </div>
          <div>
            <Button type={props.type} onClick={handleClick}>
            {enroll?"Enrolled":"Enroll"}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;