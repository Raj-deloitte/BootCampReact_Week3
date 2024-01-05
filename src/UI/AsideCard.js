import React from "react";
import './AsideCard.css';

const AsideCard = () => {
  return (
    <div className="courseDetailCard2">
      <h3>What you'll learn</h3>
      <hr></hr>
      
        <div className="aside_card_row2">
          <i className="fa-solid fa-check"></i>
          <div>Generic Programming </div>
        </div>
        <div className="aside_card_row2">
          <i className="fa-solid fa-check"></i>
          <div>Sequential Collection </div>
        </div>
        <div className="aside_card_row2">
          <i className="fa-solid fa-check"></i>
          <div>Classic Data Structure</div>
        </div>
        <div className="aside_card_row2">
          <i className="fa-solid fa-check"></i>
          <div>Associative Collection</div>
        </div>
        <div className="aside_card_row2">
          <i className="fa-solid fa-check"></i>
          <div>Sorting and searching algorithm </div>
        </div>
      
    </div>
  );
};

export default AsideCard;
