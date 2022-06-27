import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
function Theme() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
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
      {theme ? "DARK" : "LIGHT"}
      <span
        onClick={() => dispatch(toggleTheme())}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        {theme ? <MdDarkMode /> : <MdLightMode />}
      </span>
    </div>
  );
}

export default Theme;
