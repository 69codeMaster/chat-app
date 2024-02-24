import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/login/Login.tsx";
import Signup from "./pages/singup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
