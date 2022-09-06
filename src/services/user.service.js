import axios from "axios";
import authHeader from "./auth-header";
import { base, endpoints } from "api-endpoints";
import { Toast } from "reactstrap";

const API_URL = endpoints;

const getUserById = (email, password) => {
  return axios
    .get(endpoints.adminLogin)
    .then((response) => {
      if (response.data.Token) {
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      console.log(response.data.user);
      return response.data;
    });
};

const updateUser = (formData) => {
  return axios
    .patch(endpoints.updateDriverById("_id"), {
      formData
    })
    .then((response) => {
      if (response) {
       Toast("User updated successfully");
      }
      console.log(response);
      return response.data;
    });
};

const getUserBoard = () => {
  return axios.get(endpoints.getAdmins, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(endpoints.getAdmins, { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const  userService ={
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  updateUser,
};

export default  userService