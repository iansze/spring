import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const requests = {
  fetchAll: "/movies",
  signup: "/auth/signup",
  login: "/auth/login",
  updateAccount: "/auth/update",
  fetchImagesById: "/movie/backdrops/",
  fetchReviews: "/movie/review/",
};
