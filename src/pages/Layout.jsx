import React from "react";
import "./layout.css";
// import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="grid-container">
      {/* <div className="borders header">
        <Nav />
      </div> */}
      <div className="borders main">main</div>
      <div className="borders n-started">not started</div>
      <div className="borders ongoing">ongoing</div>
      <div className="borders completed">completed</div>
      {/* <div className="borders footer">footer</div> */}
    </div>
  );
};

export default Layout;
