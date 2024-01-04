import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import CourseDetails from "./pages/CourseDetails";
import { DataProvider } from "./mockData/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="app">
          <NavBar />
          <div className="trial" style={{ display: "flex" }}>
            <SideBar />
            <div className="main-container">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/course/:id" element={<CourseDetails />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
