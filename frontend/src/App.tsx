import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/login/Login.tsx";
import Signup from "./pages/singup/Signup.tsx";
import Home from "./pages/home/Home.tsx";
import "./App.css";
import { useCurrentUser } from "./context/currentUser.tsx";

function App() {
  const { currentUser } = useCurrentUser();
  console.log(currentUser);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path={"/"}
            element={currentUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path={"/login"}
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path={"/signup"}
            element={currentUser ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
