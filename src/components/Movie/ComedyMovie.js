import React, { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../app/apiService";
import ChangeMovie from "../../ChangeMovie/ChangeMovie";
import { IMG_API } from "../../app/config";
import { useWindowSize } from "../../hooks/useWindowSize";
import StarRateIcon from "@mui/icons-material/StarRate";

function ComedyMovie({ UrlData, title }) {
  const [windowWidth] = useWindowSize();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const hanleSrollyRight = () => {
    const scrollyWith = ref.current.scrollWidth;
    const clientWidth = ref.current.clientWidth;
    const scrollyLeft = scrollyWith - clientWidth;
    if (ref.current.scrollLeft < scrollyLeft) {
      ChangeMovie(ref.current, 250, clientWidth * 1, ref.current.scrollLeft);
    }
  };
  console.log(navigate, error, loading);
  const hanleSrollyLeft = () => {
    const clientWidth = ref.current.clientWidth;
    if (ref.current.scrollLeft > 0) {
      ChangeMovie(ref.current, 250, -clientWidth * 1, ref.current.scrollLeft);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await apiService.get(UrlData);
        setMovies(res.data.results);
        return res;
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [UrlData]);
  return (
    <div className="content_movie">
      <div className="nav_title">
        <h1>{title}</h1>
        <h3>
          View All <ChevronRightIcon />
        </h3>
      </div>
      <div
        className="list_movie"
        style={{
          gridTemplateColumns: `repeat(${movies.length}, ${
            windowWidth < 430
              ? "72px"
              : windowWidth < 830
              ? "152px"
              : windowWidth > 830
              ? "198px"
              : "198px"
          } )`,
        }}
        ref={ref}
      >
        {movies.map((movie) => (
          <Link
            to={`/comedy/${movie.id}`}
            key={movie.id}
            style={{ color: "white" }}
          >
            <div className="movie_item">
              <img src={IMG_API + movie.poster_path} alt="" />
              <div className="movie_rate">
                <StarRateIcon id="icon_star" />
                <span className="heading_rating">{movie.vote_average}</span>/10
              </div>
              <div className="bg_content"></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bgiconleft" onClick={hanleSrollyLeft}>
        <ChevronLeftIcon id="icon_left" sx={{ fontSize: "50px" }} />
      </div>
      <div className="bgiconright" onClick={hanleSrollyRight}>
        <ChevronRightIcon id="icon_right" sx={{ fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default ComedyMovie;
