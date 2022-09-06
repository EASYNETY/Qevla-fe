import axios from "axios";
import { endpoints } from "api-endpoints";

// const API_URL = endpoints.getAdmins;

const register = (email, number, password) => {
  return axios.post(endpoints.adUser, {
    email,
    number,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios.post(endpoints.adminLogin, {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
};
