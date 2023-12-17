import React from "react";
import "./Recommended.css";
import "./Card";
import Card from "./Card";

const Recommended = () => {
  return (
    <>
      <div className="recommend">
        <h2>Recommended For You</h2>
        <div className="recommend_container">
          <Card type="success" seat="available" number='20'/>
          <Card type="success" seat="limited" number='10'/>
          <Card type="error" seat="over" number='0'/>
        </div>
        <div className="recommend_container">
          <Card type="success" seat="available" number='20'/>
          <Card type="success" seat="limited" number='10'/>
          <Card type="error" seat="over" number='0'/>
        </div>
      </div>
    </>
  );
};
export default Recommended;
