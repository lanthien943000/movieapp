import React, { useState } from "react";
import NetFlix from "../logo/NetFlix.png";
import SearchIcon from "@mui/icons-material/Search";
import useScroll from "../hooks/useScroll";
import { Box, Button, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SearchAppBar() {
  const auth = useAuth();
  const [scrolly] = useScroll();
  let navigate = useNavigate();
  const [keywords, setKeywords] = useState("");
  function handleChangeMovie(e) {
    let keyword = e.target.value;
    setKeywords(keyword);
    if (keyword.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate("/");
    }
  }

  function nextHome() {
    navigate("/");
    setKeywords("");
  }

  return (
    <div
      className="navbar_container"
      style={
        scrolly < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#2c2c54" }
      }
    >
      <Container maxWidth="xl">
        <div className="navbar">
          <div className="logo">
            <img src={NetFlix} alt="" onClick={nextHome} />
          </div>
          <div className="navbar_search">
            <SearchIcon className="iconsearch" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="input"
              value={keywords}
              onChange={handleChangeMovie}
            />
          </div>
          <Box sx={{ position: "absolute", right: "40px" }} id="log_container">
            <>
              {!auth.user ? (
                <Button
                  style={{ color: "white" }}
                  id="btn_login"
                  onClick={() => navigate(`/login`)}
                >
                  <LoginIcon id="icon_login" />
                  Login
                </Button>
              ) : (
                <>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      right: "40px",
                      color: "white",
                    }}
                    id="btn_logout"
                  >
                    <AccountCircleIcon sx={{ mr: 0.5 }} id="icon_account" />
                    <Typography variant="p" />
                    {auth.user.username}
                    <Button
                      style={{ color: "white" }}
                      onClick={() => {
                        auth.logout(() => navigate("/"));
                      }}
                      id="btn_logout"
                    >
                      <LogoutIcon id="icon_login" />
                      Logout
                    </Button>
                  </Box>
                </>
              )}
            </>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default SearchAppBar;
