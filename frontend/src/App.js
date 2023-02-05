import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminApp from "./AdminApp";
import UserApp from "./UserApp";
import UserLoginForm from "./components/UserLoginForm";

function App() {
  return (
        <div className="app">
            <Routes>
              <Route path="/adminlogin" element={<LoginForm />} />
              <Route path="/userlogin" element={<UserLoginForm />} />
              <Route path="/AdminApp/*" element={<AdminApp />} />
              <Route path="/UserApp/*" element={<UserApp />} />
            </Routes>
          </div>
  );
}

export default App;
