import React from "react";
import { IoLocationSharp, IoLogoTwitter } from "react-icons/io5";
import { BiLink, BiBuilding } from "react-icons/bi";
import { useSelector } from "react-redux";
import formatDate from "../helper/formatDate";
import useWidth from "../hooks/useWidth";

function Content() {
  const { theme } = useSelector((state) => state);
  const width = useWidth();

  const {
    user: { data, loading, error },
  } = useSelector((state) => state);

  if (loading) {
    return <h1 style={{ marginTop: "1rem" }}>Loading...</h1>;
  }
  if (error) {
    return <h1 style={{ marginTop: "1rem" }}>Error {error}</h1>;
  }
  return (
    <>
      <div
        className="content-container"
        style={{
          background: `${theme ? "#fff" : "#1F2A48"}`,
          color: `${theme ? "#111" : "#fff"}`,
          display: `${width < 650 ? "flex" : "grid"}`,
          boxShadow: `${
            theme ? "0px 2px 0px 0px lightgray" : "0px 2px 0px 0px #222"
          }`,
        }}
      >
        {width > 650 && (
          <div className="user-profilePic">
            <img
              src={data?.avatar_url || "https://via.placeholder.com/150"}
              alt="profile-pic"
            />
          </div>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: `${width < 650 ? "row" : "column"}`,
              gap: "1rem",
              paddingTop: `${width < 650 ? "0" : "3rem"}`,
            }}
            className="user-contnet"
          >
            {width < 650 && (
              <div
                className="user-profilePic"
                style={{ margin: `${width < 650 ? "1rem" : ""}` }}
              >
                <img
                  src={data?.avatar_url || "https://via.placeholder.com/150"}
                  alt="profile-pic"
                />
              </div>
            )}
            <div
              className="content-header"
              style={{
                display: `${width < 650 ? "flex" : "flex"}`,
                flexDirection: `${width < 650 ? "column" : "row"}`,
                width: `${width < 650 ? "200px" : "410px"}`,
                justifyContent: `${width < 650 ? "flex-end" : ""}`,
              }}
            >
              <div>
                <div>{data?.name || "Not Found"}</div>
                <div
                  style={{
                    fontSize: ".9rem",
                    color: "#017AFF",
                  }}
                >
                  @{data?.login}
                </div>
              </div>
              <div
                style={{
                  textAlign: `${width < 650 ? "left" : "right"}`,
                }}
              >
                {data?.created_at
                  ? `Joined ${formatDate(data?.created_at)}`
                  : "Not Found"}
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                gridColumnStart: 1,
                gridColumnEnd: 2,
                textAlign: `${width < 650 ? "center" : "left"}`,

                width: "100%",
              }}
              className="user-bio"
            >
              {data?.bio || "Not Found"}
            </div>
            <div
              className="content-stats"
              style={{ background: `${theme ? "#F5F8FF" : "#141C2F"}` }}
            >
              <div>
                <div>Repo</div>
                <div>{data?.public_repos}</div>
              </div>
              <div>
                <div>Followers</div>
                <div>{data?.followers}</div>
              </div>
              <div>
                <div>Following</div>
                <div>{data?.following}</div>
              </div>
            </div>

            <div
              className="content-links"
              style={{
                display: `${width < 650 ? "flex" : "grid"}`,
                flexDirection: `${width < 650 ? "column" : ""}`,
                gap: `${width < 650 ? "1.5rem" : ""}`,
              }}
            >
              <div>
                <span style={{ marginRight: "5px" }}>
                  <IoLocationSharp />
                </span>
                {data?.location || "Not Found"}
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: `${theme ? "#111" : "#fff"}`,
                    textDecoration: "none",
                  }}
                  href={
                    data?.twitter_username
                      ? `https://www.twitter.com/${data?.twitter_username}`
                      : "https://www.twitter.com"
                  }
                >
                  <span style={{ marginRight: "5px" }}>
                    <IoLogoTwitter />
                  </span>
                  {data?.twitter_username || "Not Found"}
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: `${theme ? "#111" : "#fff"}`,
                    textDecoration: "none",
                  }}
                  href={data?.html_url || "Not Found"}
                >
                  <span style={{ marginRight: "5px" }}>
                    <BiLink />
                  </span>
                  {data?.html_url || "Not Found"}
                </a>
              </div>
              <div>
                <span style={{ marginRight: "5px" }}>
                  <BiBuilding />
                </span>
                {data?.company || "Not Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
