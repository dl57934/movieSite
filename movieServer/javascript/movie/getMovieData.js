import axios from "axios";
import { ReviewModel } from "../db/models";
const BASE_URL = "https://yts.am/api/v2/";
const MOVIE_LIST_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovieList = async ({ rating, limit, page }) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_LIST_URL, {
    params: {
      minimum_rating: rating,
      limit,
      sort_by: "like_count",
      page
    }
  }).catch(err => {
    return err;
  });

  return movies;
};

export const getMovieDetail = async ({ movie_id }) => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAIL_URL, {
    params: {
      movie_id
    }
  }).catch(err => console.log(err));

  return movie;
};

export const getMoviesuggestion = async ({ movie_id }) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTION_URL, {
    params: {
      movie_id
    }
  }).catch(err => console.log(err));

  return movies;
};

export const getReviewData = async ({ movie_id }) => {
  const array = await ReviewModel.findByMovieId(movie_id);
  console.log(array);
  return array;
};
