import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Theme() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        fontSize: "1rem",
      }}
    >
      LIGHT
      <span
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <MdLightMode />
      </span>
    </div>
  );
}

export default Theme;
