import React from "react";
import Theme from "./Theme";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2> devfinder </h2>
      <Theme />
    </div>
  );
}

export default Header;
