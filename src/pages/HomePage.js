import React from "react";
import ActionMovie from "../components/Movie/ActionMovie";
import ComedyMovie from "../components/Movie/ComedyMovie";
import DocumentaryMovie from "../components/Movie/DocumentaryMovie";
import HorrorMovie from "../components/Movie/HorrorMovie";
import NetflixMovie from "../components/Movie/NetflixMovie";
import RomanceMovie from "../components/Movie/RomanceMovie";
import TopRatingMovie from "../components/Movie/TopRating";
import TrendingMovie from "../components/Movie/TrendingMovie";
import { Container } from "@mui/material";
import request from "../app/config";

function HomePage() {
  return (
    <div className="home_movie">
      <Container maxWidth="lg">
        <TrendingMovie
          title="Trending Movies"
          UrlData={request.DataTrendingMovie}
        />
        <TopRatingMovie
          title="Top Rating Movies"
          UrlData={request.DataTopRatingMovie}
        />
        <ActionMovie title="Action Movies" UrlData={request.DataActionMovie} />
        <NetflixMovie
          title="Netflix Movies"
          UrlData={request.DataNetflixMovie}
        />
        <HorrorMovie title="Horror Movies" UrlData={request.DataHorrorMovie} />
        <ComedyMovie title="Comedy Movies" UrlData={request.DataComedyMovie} />
        <RomanceMovie
          title="Romance Movie"
          UrlData={request.DataRomanceMovie}
        />
        <DocumentaryMovie
          title="Documentary Movie"
          UrlData={request.DataDocumentaryMovie}
        />
      </Container>
    </div>
  );
}

export default HomePage;
