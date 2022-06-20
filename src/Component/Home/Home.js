import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  let userData = useSelector((state) => state.data.data);
  let userrole = useSelector((state) => state.ui);
  let courseData = useSelector((state) => state.courseData.courseData);
  console.log("Couser", courseData);

  return (
    <div>
      {courseData.map((data, index) => {
        return (
          <div className="course-layout" key={index}>
            <div className="course">
              <h1 className="text-white">{data.name}</h1>
              <h3 className="text-white">{data.course}</h3>
            </div>
            <div>
              <button className="request_bth">Request</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
