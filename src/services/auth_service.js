import axios from "axios";
import { endpoints } from "api-endpoints";

const API_URL = "/auth";

const signup = (email, password) => {
  return axios
    .post(endpoints.addUSer, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(endpoints.adminLogin, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.Token) {
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      console.log(response.data.user);
      return response.data;
    });
};

const requestPasswordReset = (email) => {
  return axios
    .post(endpoints.adminLogin, {
      email,
    })
    .then((response) => {
      if (response.data) {
        window.localStorage.setItem("passReq", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  requestPasswordReset,
  getCurrentUser,
};

export default authService;
