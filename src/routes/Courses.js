import React from "react";
import SearchForm from "../components/SearchForm";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <>
      <SearchForm />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </>
  );
};

Courses.propTypes = {};

export default Courses;
