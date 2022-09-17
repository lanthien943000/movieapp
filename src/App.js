import React from "react";
import { Route, Routes } from "react-router-dom";
import EndPage from "./components/EndPage";
import SearchAppBar from "./components/SearchAppBar";
import { AuthProvider } from "./contexts/AuthContext";
import DetailAction from "./DetailMovie/DetailActionMovie";
import DetailTrending from "./DetailMovie/DetailTrendingMovie";
import DetailTopRating from "./DetailMovie/DetailTopRatingMovie";
import DetailNetflix from "./DetailMovie/DetailNetflixMovie";
import DetailHorror from "./DetailMovie/DetailHorrorMovie";
import DetailComedy from "./DetailMovie/DetailComedyMovie";
import DetailRomance from "./DetailMovie/DetailRomanceMovie";
import DetailDocumentary from "./DetailMovie/DetailDocumentaryMovie";
import Layout from "./layouts/Layout";
import LoginForm from "./pages/LoginForm";
import Data from "./MovieData/Data";
import request from "./app/config";

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginForm />} />
          </Route>
          <Route path="/search" element={<Data />} />
        </Routes>
        <Routes>
          <Route
            path="trending/:id"
            element={<DetailTrending UrlData={request.DataTrendingMovie} />}
          />
          <Route
            path="toprating/:id"
            element={<DetailTopRating UrlData={request.DataTopRatingMovie} />}
          />
          <Route
            path="action/:id"
            element={<DetailAction UrlData={request.DataActionMovie} />}
          />
          <Route
            path="netflix/:id"
            element={<DetailNetflix UrlData={request.DataNetflixMovie} />}
          />
          <Route
            path="horror/:id"
            element={<DetailHorror UrlData={request.DataHorrorMovie} />}
          />
          <Route
            path="comedy/:id"
            element={<DetailComedy UrlData={request.DataComedyMovie} />}
          />
          <Route
            path="romance/:id"
            element={<DetailRomance UrlData={request.DataRomanceMovie} />}
          />
          <Route
            path="documentary/:id"
            element={
              <DetailDocumentary UrlData={request.DataDocumentaryMovie} />
            }
          />
        </Routes>
        <EndPage />
      </AuthProvider>
    </div>
  );
}

export default App;
