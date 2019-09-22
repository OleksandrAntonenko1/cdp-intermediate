import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://5d876947cd71160014aaea19.mockapi.io/v1/courses",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        }
      );

      const data = await response.json();
      const courseCards = data.map(
        ({ title, createDate, duration, authors, id, description }) => {
          return (
            <CourseCard
              key={id}
              id={id}
              title={title}
              createDate={createDate}
              duration={duration}
              authors={authors}
              description={description}
            />
          );
        }
      );

      setCourses(courseCards);
    }
    fetchData();
  });

  return (
    <>
      <SearchForm />
      {courses}
    </>
  );
};

Courses.propTypes = {};

export default Courses;
