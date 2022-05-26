import React from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Content from "./Components/Content/Content.jsx";

import "./Styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
