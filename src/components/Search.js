import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setLoading, setError } from "../features/user/userSlice";
import axios from "axios";

function Search() {
  const dispatch = useDispatch();
  const [serchQuery, setSearchQuery] = useState("");
  const { theme } = useSelector((state) => state);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setError(false));
    dispatch(setLoading(true));
    try {
      const { data } = await axios.get(`https://api.github.com/users/${serchQuery}`);
      dispatch(getUser(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
    setSearchQuery("");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <form
        onSubmit={handleSearch}
        style={{
          width: "100%",
          height: "60px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `${theme ? "#fff" : "#1F2A48"}`,
          color: `${theme ? "#111" : "#fff"}`,
          boxShadow: `${theme ? "0px 2px 0px 0px lightgray" : "0px 2px 0px 0px #222"}`,

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
          onChange={(e) => setSearchQuery(e.target.value)}
          value={serchQuery}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            border: "none",
            color: `${theme ? "#111" : "#fff"}`,
            fontSize: "1rem",
            paddingLeft: "3rem",
          }}
          type='text'
          placeholder='Search GitHub username...'
        />
        <input
          type='submit'
          value='Search'
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
