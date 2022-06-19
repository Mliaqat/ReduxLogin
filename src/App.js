import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "./Store/dataSlice";
import { useEffect } from "react";
import Home from "./Component/Home/Home";

function App() {
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.data);
  const datahandler = useSelector((state) => state.ui);

  useEffect(() => {
    const getData = async () => {
      const userdata = [];

      const response = await axios
        .get("https://reacttest2-8df5e-default-rtdb.firebaseio.com/user.json")
        .then((res) => {
          const data = res.data;

          for (const key in data) {
            userdata.push({
              firstName: data[key].firstName,
              lastName: data[key].lastName,
              email: data[key].email,
              password: data[key].password,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch(dataActions.storeData(userdata));
    };
    getData();
  }, [datahandler]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
