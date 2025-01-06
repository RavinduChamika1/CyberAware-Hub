import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/profile";

//Frameworks
import Programs from "./components/Programs";
import ISO from "./components/Program/ISO";
import NIST from "./components/Program/NIST";
import GDPR from "./components/Program/GDPR";

// Policys
import Policys from "./components/Policys";
import AUP from "./components/Policys/AUP";
import ACP from "./components/Policys/ACP";
import AMPP from "./components/Policys/AMPP";
import BDRP from "./components/Policys/BDRP";
import BYOD from "./components/Policys/BYOD";
import DPAPP from "./components/Policys/DPAPP";
import IRP from "./components/Policys/IRP";
import ITP from "./components/Policys/ITP";
import NSP from "./components/Policys/NSP";
import PMP from "./components/Policys/PMP";
import RAP from "./components/Policys/RAP";

//Dashboard
import Dashboard from "./components/Dashboard";

//Quiz
import Quiz from "./components/Awareness/Quiz";
import IQuiz from "./components/Awareness/IQuiz";

import { useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <Login />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Programs" element={<Programs />} />
              <Route path="/ISO" element={<ISO />} />
              <Route path="/NIST" element={<NIST />} />
              <Route path="/GDPR" element={<GDPR />} />

              <Route path="/Policys" element={<Policys />} />
              <Route path="/AUP" element={<AUP />} />
              <Route path="/ACP" element={<ACP />} />
              <Route path="/AMPP" element={<AMPP />} />
              <Route path="/BDRP" element={<BDRP />} />
              <Route path="/BYOD" element={<BYOD />} />
              <Route path="/DPAPP" element={<DPAPP />} />
              <Route path="/IRP" element={<IRP />} />
              <Route path="/ITP" element={<ITP />} />
              <Route path="/NSP" element={<NSP />} />
              <Route path="/PMP" element={<PMP />} />
              <Route path="/RAP" element={<RAP />} />

              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/IQuiz" element={<IQuiz />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
