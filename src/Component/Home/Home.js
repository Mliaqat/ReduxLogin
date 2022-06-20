import React from "react";
import { useSelector } from "react-redux";

function Home() {
  let userData = useSelector((state) => state.data.data);
  let userrole = useSelector((state) => state.ui);
  console.log("userrole", userrole);

  return (
    <div>
      {userData.map((data, index) => {
        return <h2>{data.firstName}</h2>;
      })}
    </div>
  );
}

export default Home;
