import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
