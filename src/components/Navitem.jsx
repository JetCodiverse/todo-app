import React from "react";

const Navitem = ({ text, active = "" }) => {
  return (
    <li>
      <a href="#" className={`nav-link ${active}`}>
        {text}
      </a>
    </li>
  );
};

export default Navitem;
