import { endpoints } from "api-endpoints";
import axios from "axios";
import { handleMyErrors } from "./error-handler-service";
import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../actions/types";
import { tokenConfig } from "../redux/actions/auth-actions/tokenConfig";
// import { httpServiceInterfaceOauth2 } from "./http-service-oauth";



export const fetchAllDriver = async () => {
  try {
    let data = await axios.get(endpoints.getDrivers);
    return data;
  } catch (err) {
    return handleMyErrors(err);
  }
};

export const fetchAllDrivers = async () => {
  try {
    const data = await axios.get(endpoints.getDrivers);

    return data;
  } catch (error) {
    return handleMyErrors(error);
  }
};


export const fetchDrivers = (pageNumber, perPage) => {
  let params = { page: pageNumber, perPage };

  return (dispatch) => {
    dispatch(fetchDriversStarted());

    axios
      .get(endpoints.getDrivers, tokenConfig(null, params))
      .then((res) => {
        let drivers = res.data.products;
        let pagesCount = res.data.pagesCount;

        dispatch(fetchDriversSuccess(drivers, pagesCount, perPage));
      })
      .catch((error) => {
        dispatch(fetchDriversFailure(error.message));
      });
  };
};


const fetchDriversStarted = () => {
  return {
    type: FETCH_PRODUCTS_STARTED,
  };
};

const fetchDriversSuccess = (products, pagesCount) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      products,
      pagesCount,
    },
  };
};

const fetchDriversFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };
};
