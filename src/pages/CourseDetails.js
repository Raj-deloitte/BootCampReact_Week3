import React from "react";
import Assessment from "../component/Assessment";
import BreadCrumbs from "../UI/Breadcrumbs";
import CourseBanner from "../component/CourseBanner";
import Description from "../component/Description";
import CourseDetailCard from "../UI/CourseDetailCard";
import "./CourseDetails.css";
import AsideCard from "../UI/AsideCard";
import { useParams } from "react-router-dom";
import { useData } from "../mockData/DataContext";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = useData();
  const selectedCourse = courses.find((course) => course.id === id);
  console.log("selected", selectedCourse);
  return (
    <>
      <BreadCrumbs />
      <div className="course_detail">
        <CourseBanner course={selectedCourse} />
        <CourseDetailCard  course={selectedCourse}/>
      </div>
      <div className="course_detail">
        <Description />
        <AsideCard />
      </div>

      <Assessment />
    </>
  );
};

export default CourseDetails;
