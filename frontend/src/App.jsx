import React from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

import "./Styles/app.css";

const App = () => {
  return (
  <div className="App">
    <Navbar />
    <Sidebar />
  </div>
  );
};

export default App;
