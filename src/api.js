import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

export const imageUrl = "https://image.tmdb.org/t/p/w500";

export const fetchMovies = (type, page = 1) =>
  axios.get(`${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);

export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);

export const fetchMovieDetail = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

export const fetchMovieCast = (id) =>
  axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
