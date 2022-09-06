import axios, { AxiosInstance } from "axios";
import { authBaseUrl } from "../api-endpoints";
import { encryptStorage } from "../utils/encryptor";
import {
  clearTimeouts,
  isEmptyString,
  isNullOrUndefined,
  isTokenCloseToExpiry,
  tokenRefreshTimeout,
  tokenRequeryProcessing,
} from "../utils/tools";
import { handleMyErrors } from "./error-handler-service";
import queryString from "query-string";

const myOauth2Axios: AxiosInstance = axios.create({
  baseURL: "",
});
myOauth2Axios.defaults.headers.post["Content-Type"] = "application/json";
myOauth2Axios.defaults.headers.post["Accept"] = "application/json";
myOauth2Axios.defaults.timeout = 120000;
myOauth2Axios.interceptors.request.use((request) => {
  return request;
});

function setJwt(jwt: string | null) {
  myOauth2Axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

function getRefreshToken() {
  let tokenVal = encryptStorage.getItem("refreshToken");
  return tokenVal;
}

function getJwt() {
  let tokenVal: string = myOauth2Axios.defaults.headers.common["Authorization"];

  if (!isNullOrUndefined(tokenVal)) {
    let tokenValSplit = tokenVal.split(" ");
    if (tokenValSplit.length > 1 && tokenValSplit[1].length > 0) {
      return tokenVal;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export const listenForTokenExpiry = async () => {
  let expiresAt = encryptStorage.getItem("expiresAt");
  if (isTokenCloseToExpiry(Number(expiresAt) ?? -1)) {
    await refreshToken();
  }
};

export const refreshToken = async () => {
  try {
    let refT = getRefreshToken();
    if (!isNullOrUndefined(refT) || !isEmptyString(refT)) {
      const options = {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: "Basic ".concat(
            process.env.REACT_APP_BASIC_AUTH ?? ""
          ),
        },
      };
      const url = `${authBaseUrl}/oauth/token`;
      const { status, data } = await myOauth2Axios.post(
        url,
        queryString.stringify({
          grant_type: "refresh_token",
          client_id: "SYSTEM",
          refresh_token: refT,
        }),
        options
      );

      if (status === 200 && data) {
        const jwtToken = data.access_token;
        clearTimeouts(tokenRefreshTimeout);
        encryptStorage.setItem("refreshToken", data.refresh_token);
        tokenRequeryProcessing(jwtToken);

        // recursiveCountdownTo(tRes.tokenRequeryInterval, true);
        httpServiceInterfaceOauth2.setJwt(jwtToken);
        return data;
      }
    }
  } catch (err) {
    httpServiceInterfaceOauth2.setJwt("");
    return handleMyErrors(err);
  }
};

const doGet = async (url: string, _config?: any) => {
  let resData: any = {};
  try {
    // if (httpServiceInterfaceOauth2.getJwt() === null) {
    //   await refreshToken();
    // }
    const { data } = await myOauth2Axios.get(url);
    return data;
  } catch (err) {
    resData = handleMyErrors(err);
  }
  return resData;
};

const doPost = async (url: string, requestBody: any, config: any = {}) => {
  let resData: any;
  try {
    // await authHttpForUser();
    const { data } = await myOauth2Axios.post(url, requestBody, config);
    return data;
  } catch (err) {
    resData = handleMyErrors(err);
  }
  return resData;
};

const doPut = async (url: string, requestBody: any, config: any = {}) => {
  let resData: any;
  try {
    // await authHttpForUser();
    const { data } = await myOauth2Axios.put(url, requestBody, config);
    return data;
  } catch (err) {
    resData = handleMyErrors(err);
  }
  return resData;
};

export const httpServiceInterfaceOauth2 = {
  myAxios: axios,
  setJwt: setJwt,
  // setRefreshToken: setRefreshToken,
  getJwt: getJwt,
  get: doGet,
  post: doPost,
  put: doPut,
};
