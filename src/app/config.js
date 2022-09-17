export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const IMG_API = process.env.REACT_APP_IMG_API;
const request = {
  DataTrendingMovie: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  DataNetflixMovie: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  DataTopRatingMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  DataActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  DataComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  DataHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  DataRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  DataDocumentaryMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
