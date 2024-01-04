import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CourseBanner.css";

const CourseBanner = () => {
  const [clip, setClip] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setClip(false);
    }, 3000);
  }, [clip]);

  return (
    <div className="course_banner">
      <img src="./asset/Banner.svg" alt="banner_image" />
      <div className="course_title">
        <h1>Selenium WebDriver with Java from Basics till Expert Level</h1>
        <CopyToClipboard
          text="Selenium WebDriver with Java from Basics till Expert Level"
          onCopy={() => setClip(true)}
        >
          {!clip ? (
            <i className="fa-solid fa-share-nodes"></i>
          ) : (
            <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          )}
        </CopyToClipboard>
      </div>
      <div className="banner_footer">
        <div className="left_portion">
          <img src="./asset/duration.svg" alt="duration"></img>
          <div className="left_days">
            Course Duration
            <h6>40 Days</h6>
          </div>
        </div>
        <div className="right_portion">
          <img src="./asset/clock.svg" alt="clock"></img>
          <h6>Last updated 12/20</h6>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
