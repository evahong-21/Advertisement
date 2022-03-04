import React, { useState } from "react";
import Mark from "mark.js";
import "./TextMarker.css";

function TextMarker({ index, color }) {
  const [search, setSearch] = useState("");
  // console.log(search);
  const add_textbox = () => {
    const testHighlight = document.querySelectorAll("div.descript");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      instance.mark(search, { className: index });
    });
  };

  const nonHighlight = () => {
    const testHighlight = document.querySelectorAll("div.descript");
    testHighlight.forEach(function (userHighlight) {
      const instance = new Mark(userHighlight);
      instance.unmark({ className: index });
      setSearch("");
    });
  };

  return (
    <div className="search-color-box" id="box">
      <input
        id="searchBox"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        id="colorBox"
        type={"button"}
        onClick={add_textbox}
        disabled={search === "" || null ? true : false}
        style={{
          backgroundColor: color,
        }}
      />

      <input
        id="deleteBox"
        type={"button"}
        disabled={search === "" || null ? true : false}
        onClick={nonHighlight}
        value={"del"}
      />
    </div>
  );
}

export default TextMarker;
