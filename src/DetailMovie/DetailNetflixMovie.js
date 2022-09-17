import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { IMG_API } from "../app/config";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RatingStar } from "rating-star";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function DetailNetflix({ UrlData }) {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiService.get(UrlData);
      setMovies(res.data.results);
      return res;
    };
    fetchData();
  }, [UrlData]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="detail_container">
      {movies.map((movie) => {
        if (movie.id == params.id) {
          return (
            <div key={movie.id}>
              <div
                style={{
                  backgroundImage: `url(${
                    IMG_API + movie.backdrop_path || movie.poster_path
                  })`,
                  width: "100%",
                  height: "400px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              >
                <div className="fadetop"></div>
                <Container maxWidth="lg">
                  <div className="detail_main">
                    <div className="detail_poster">
                      <img src={IMG_API + movie.poster_path} alt="" />
                    </div>
                    <div className="detail_heading">
                      <div>
                        <h4>{movie.release_date || movie.first_air_date}</h4>
                        <h1> {movie.title || movie.name}</h1>
                        <p>{movie.overview}</p>
                      </div>
                      <div className="main_icon">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "30px",
                          }}
                        >
                          <button className="icon_playarrowicon">
                            <PlayArrowIcon id="icon_play" />
                          </button>
                          <span>Watch The Trailer</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <button className="icon_playarrowicon">
                            <ShareIcon id="icon_share" />
                          </button>
                          <span>Share</span>
                        </div>
                      </div>
                      <div className="detail_rate">
                        <div className="vote_average">
                          <p>
                            <span className="voted">{movie.vote_average}</span>
                            /10 <span className="imdb">IMDb</span>
                          </p>
                        </div>
                        <div className="rate">
                          <span>Rated This Movie:</span>
                          <RatingStar
                            clickable
                            maxScore={10}
                            numberOfStar={10}
                            id="123"
                            rating={movie.vote_average}
                          />
                        </div>
                        <div className="add_heart">
                          <button className="add">
                            <AddIcon id="icon_add" />
                          </button>
                          <button className="heart">
                            <FavoriteIcon id="icon_heart" />
                          </button>
                        </div>
                      </div>
                      <div className="select">
                        <Box className="list_tabs">
                          <Box className="tabs_detail">
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              aria-label="primary tabs example"
                              indicatorColor="primary"
                              textColor="inherit"
                            >
                              <Tab label="About" {...a11yProps(0)} id="tabs" />
                              <Tab label="Cast" {...a11yProps(1)} id="tabs" />
                              <Tab label="Rating" {...a11yProps(2)} id="tabs" />
                            </Tabs>
                          </Box>
                          <TabPanel value={value} index={0}>
                            <div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </TabPanel>
                        </Box>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        } else {
          return console.log("Error Data Message");
        }
      })}
    </div>
  );
}

export default DetailNetflix;
