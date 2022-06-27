import React from "react";
import { FiSearch } from "react-icons/fi";
function Search() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <form
        style={{
          width: "100%",
          height: "60px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1F2A48",
          borderRadius: "6px",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: ".8rem",
            fontSize: "1.4rem",
            lineHeight: "1.4rem",
            color: "#017AFF",
          }}
        >
          <FiSearch />
        </span>
        <input
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "1rem",
            paddingLeft: "3rem",
          }}
          type="text"
          placeholder="Search GitHub username..."
        />
        <input
          type="submit"
          value="Search"
          style={{
            border: "none",
            height: "70%",
            width: "100px",
            backgroundColor: "#017AFF",
            color: "#fff",
            borderRadius: "6px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}

export default Search;
