import React from "react";
import "./Explore.css";
import Button from "./Button";


export default function Explore() {
  return (
    <>
      <div className="Explore">
        <div className="left-side">
          <h1>Expand your career opportunities</h1>
          <h6>
            Choose from a list of online video courses with new additions
            published every month
          </h6>
          <Button type="success"
           //onClick={() => console.log('Primary Button Clicked')}
           >
          Explore Now
          </Button>
        </div>
        <div className="right-side">
          <img src="./asset/explore.svg" alt="" />
        </div>
      </div>
    </>
  );
}
