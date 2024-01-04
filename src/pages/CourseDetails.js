import * as React from "react";
import Assessment from "../component/Assessment";
import BreadCrumbs from "../UI/Breadcrumbs";
import CourseBanner from "../component/CourseBanner";
import Description from "../component/Description";
import CourseDetailCard from "../UI/CourseDetailCard";
import "./CourseDetails.css";
import AsideCard from "../UI/AsideCard";

const CourseDetails = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="course_detail">
        <CourseBanner />
        <CourseDetailCard />
      </div>
      <div className="course_detail">
      <Description />
      <AsideCard/>
      </div>
      
      <Assessment />
    </>
  );
};

export default CourseDetails;
