import React from "react";
import { useSelector } from "react-redux";

function AdminPanel() {
  let userrole = useSelector((state) => state.ui);
  console.log(userrole.role);
  return <div>AdminPanel</div>;
}

export default AdminPanel;
