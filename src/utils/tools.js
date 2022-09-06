import { generateRandomChars, generateRandomNumber } from "./helpers";
import {
  corporateCodePrefix,
  corporateNameSubstringLength,
  defaultAppValues,
  metricValues,
  responseCodes,
} from "./static";
import { format } from "date-fns";
import moment from "moment";
import {
  httpServiceInterfaceOauth2,
  refreshToken,
} from "../services/http-service-oauth";
import { encryptStorage } from "./encryptor";

let tokenCounterTimeoutId = -1;

export const tokenRequeryProcessing = (accessToken: string) => {
  let _tDet = parseJwt(accessToken);
  let expiresAt = _tDet?.exp;
  let expiresAt_ms = expiresAt;
  let nowNow = moment.now();
  // let tokenRequeryInterval = (expiresAt * 1000 - nowNow) * 0.8;
  let tokenRequeryInterval = 180000;
  encryptStorage.setItem("nowNow", String(nowNow));
  encryptStorage.setItem("expiresAt", expiresAt_ms);
  encryptStorage.setItem("requeryTime", String(nowNow + tokenRequeryInterval));
  encryptStorage.setItem("tokenRequeryInterval", String(tokenRequeryInterval));

  return { tokenDetails: _tDet, tokenRequeryInterval: tokenRequeryInterval };
};
export const recursiveCountdownTo = async (
  countdownVal: any,
  isTokenRefreshed = false
) => {
  if (countdownVal < 1000) {
    return;
  }
  setTimeout(() => {
    if (!isTokenRefreshed) {
      refreshToken();
    }
    recursiveCountdownTo(countdownVal, isTokenRefreshed);
  }, countdownVal);
};
const getTokenRefreshTime = () => {
  let interval = encryptStorage.getItem("tokenRequeryInterval")
  if (!isNullOrUndefined(interval)) {
    let time = Number(interval)
    return time - (Math.floor(time / 5))
  }
  return 5000
}
export const keepTokenFresh = async () => {
  setTimeout(() => {
    refreshToken()
    keepTokenFresh()
  }, getTokenRefreshTime());
}

export const tokenRefreshTimeout = tokenCounterTimeoutId;
export const clearTimeouts = (timeOutId = 0) => {
  if (timeOutId > 0) {
    window.clearTimeout(timeOutId);
  } else {
    var noop = function () { },
      firstId = window.setTimeout(noop, 0);
    return function () {
      var lastId = window.setTimeout(noop, 0);
      console.log("Removing", lastId - firstId, "timeout handlers");
      while (firstId !== lastId) window.clearTimeout(++firstId);
    };
  }
};

export const isObject = (item: any) => {
  return (
    typeof item === "object" &&
    !Array.isArray(item) &&
    item !== null &&
    item !== undefined
  );
};

export const skipObject = (arrOfVals: any, objVal: any) => {
  let newObj: any = {};
  if (arrOfVals.length === 0) {
    for (const [keys, values] of Object.entries(objVal)) {
      newObj = Object.assign({}, newObj, {
        [keys]: values,
      });
    }
    return newObj;
  } else {
    for (const [keys, values] of Object.entries(objVal)) {
      if (!arrOfVals.includes(keys)) {
        newObj = Object.assign({}, newObj, {
          [keys]: values,
        });
      }
    }
    return newObj;
  }
};

export const cherryPickObject = (arrOfVals: any, objVal: any) => {
  let newObj: any = {};
  for (const [keys, values] of Object.entries(objVal)) {
    if (arrOfVals.includes(keys)) {
      newObj = Object.assign({}, newObj, {
        [keys]: values,
      });
    }
  }
  return newObj;
};

export const hasKeys = (objVal: any) => {
  return !isNullOrUndefined(objVal) && Object.entries(objVal).length > 0;
};
export const isKeyPresent = (objVal: any, requiredKey: string) => {
  return !isNullOrUndefined(objVal) && objVal[requiredKey];
};

export const createUUID = (prefix: string) => {
  return (
    prefix +
    (new Date().getTime().toString(16) +
      Math.floor(1e7 * Math.random()).toString(16))
  );
};

export const checkValueOrElseUseDefinedVal = (
  val: any,
  definedString: string
) => {
  return val !== null && val !== undefined ? val : definedString;
};

export const isEmptyString = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const isANumber = (val: any) => {
  return val !== null && val !== undefined && !Number.isNaN(val);
};

export const valueIsLessThan = (val: any, operand: number) => {
  return isANumber(val) && val < operand;
};

export const valueIsGreaterThan = (val: any, operand: number) => {
  return isANumber(val) && val > operand;
};

export const isEmptyArray = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const isNullOrUndefined = (val: any) => {
  return val === null || val === undefined || val === {};
};

export const trueOrFalse = (val: any) => {
  return checkValueOrElseUseDefinedVal(val, "") !== "" &&
    val !== null &&
    val?.toString().toLowerCase() === "true"
    ? true
    : val.toString().toLowerCase() === "false"
      ? false
      : val;
};

export const isYesOrNo = (val: any) => {
  return checkValueOrElseUseDefinedVal(val, "") !== "" &&
    trueOrFalse(val) === false
    ? "No"
    : trueOrFalse(val) === true
      ? "Yes"
      : val;
};

export const parseResponse = (val: any, fallbackRes: string) => {
  if (checkValueOrElseUseDefinedVal(val, "") !== "") {
    let resMessage = checkValueOrElseUseDefinedVal(
      val?.actionResponse?.message,
      fallbackRes
    );

    return resMessage;
  } else {
    return fallbackRes;
  }
};

export const isSuccessful = (val: any) => {
  return (
    (val !== null && val !== undefined && val === "00") ||
    val === true ||
    String(val).toLowerCase() === "successful"
  );
};
export const isDeclined = (val: any) => {
  return (
    (val !== null && val !== undefined && val === "05") ||
    val === true ||
    String(val).toLowerCase() === "successful"
  );
};
export const isNotFound = (val: any) => {
  return (
    val !== null && val !== undefined && val === responseCodes.NO_RECORD_FOUND
  );
};
export const splitString = (val: string, regexp: string) => {
  let res = "";
  if (!isEmptyString(val)) {
    res = val.split(regexp).join(" ");
  }
  return res;
};
export const splitObject = (val: any) => {
  let res = "";
  for (const [, value] of Object.entries(val)) {
    res += String(value).concat("<br/>");
  }
  return res;
};

export const camelCaseToSentenceCase = (val: string) => {
  let res = "";
  try {
    if (!isEmptyString(val)) {
      res = val.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
    }
  } catch (error) {
    console.log("ERROR OCCURRED WHILE PARSING:::", error);
  }

  return capitaliseFirstLetter(res);
};

export const upperCaseCharAt = (val: string, loc: number) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(loc).toUpperCase() : val;
  }
  return res;
};
export const capitaliseFirstLetter = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const makeTitleCase = (stringInContext: string) => {
  let titleSentence = stringInContext.toLowerCase().split(" ");
  for (let i = 0; i < titleSentence.length; i++) {
    titleSentence[i] =
      titleSentence[i][0].toUpperCase() + titleSentence[i].slice(1) + " ";
  }
  return titleSentence;
};

export const makeSentenceCase = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const getSessionId = () => {
  return /SESS\w*ID=([^;]+)/i.test(document.cookie) ? RegExp.$1 : false;
};

export const useGoBack = () => { };

export const wait = (ms: any) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const grouper =
  (key: any) =>
    (array: any[], asObject = {}) =>
      array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      }, asObject);

export const groupByHelper = grouper("parentMenuName");
export const groupByReferenceNumber = grouper("requestReference");
export const stringStripper = ({
  stringInContext,
  replacer,
  replacee,
}: any) => {
  let stringAfterReplacement = "";
  try {
    stringAfterReplacement = stringInContext.replaceAll(
      replacee ?? "",
      replacer === "" ? "" : replacer
    );
  } catch (error) {
    stringAfterReplacement = stringInContext;
  }
  return stringAfterReplacement;
};

export const toDateFormat = (date: any, dateFormat?: string) => {
  let d = isNullOrUndefined(date) ? new Date() : new Date(date);
  let dtString = "";
  switch (dateFormat) {
    case "yyyy-MM-dd":
      dtString = format(new Date(), dateFormat);
      break;
    default:
      dtString = String(d.getDate()).concat(
        String(d.getMonth() + 1),
        String(d.getFullYear())
      );
      break;
  }

  return dtString;
};

export const generateCorporateCodePattern = (companyName = "") => {
  let corporateCodeVal = "";
  if (!isNullOrUndefined(companyName)) {
    if (companyName.length > corporateNameSubstringLength) {
      corporateCodeVal = corporateCodePrefix.concat(
        companyName.substring(0, corporateNameSubstringLength),
        generateRandomChars(3)
      );
    } else {
      corporateCodeVal = corporateCodePrefix.concat(
        companyName,
        generateRandomChars(3)
      );
    }
  }
  return corporateCodeVal.length > 0
    ? corporateCodeVal.toLocaleLowerCase()
    : corporateCodeVal;
};

export const generateUsernamePattern = (username = "") => {
  let usernameVal = "";
  if (!isNullOrUndefined(username)) {
    usernameVal = shuffle(username);
  }

  return usernameVal.length > 0 ? usernameVal.toLocaleLowerCase() : usernameVal;
};

export const shuffle = (stringToRandomize: string) => {
  var arr = stringToRandomize.split("");
  var n = arr.length;

  for (var i = 0; i < n - 1; ++i) {
    var j = generateRandomNumber(n);

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  stringToRandomize = arr.join("");
  return stringToRandomize;
};

export const buildDateRangeString = (data: any) => {
  return data.startDate.concat(
    "/",
    data?.endDate,
    "/",
    data?.requestTypeId === "APPROVED" ? 1 : 0
  );
};

export const sanitizeUrl = (data: string) => {
  return data.startsWith("/") ? data.substr(1) : data;
};

export const getToday = () => {
  let myDate = new Date();
  let year: any = String(myDate.getFullYear());
  let month: any =
    myDate.getMonth() < 10 ? "0" + myDate.getMonth() : myDate.getMonth();
  let day: any = myDate.getDay() < 10 ? "0" + myDate.getDay() : myDate.getDay();

  let finalDate = String(month + day + year);
  return finalDate;
};

export const stringSplitter = (splitBy: string, stringToSplit: string) => {
  try {
    let splittedString = stringToSplit.trim().split(splitBy);
    let splittedStringArr = splittedString.join(" ");

    return splittedStringArr;
  } catch (error) {
    return stringToSplit;
  }
};

export const parseJwt = (token: any) => {
  try {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    return null;
  }
};

export const isTokenExpired = (tokenExpiryIn: number) => {
  let nowNow = moment().toDate().getTime();
  let isExpired = moment(nowNow).isAfter(moment(tokenExpiryIn));
  return isExpired;
};

export const isTokenCloseToExpiry = (tokenExpiryIn: number) => {
  let nowNow = moment().toDate().getTime();
  let willExpireIn = moment(tokenExpiryIn);
  let isExpiringIn = willExpireIn.diff(nowNow);
  let requeryT = encryptStorage.getItem("tokenRequeryTime") ?? -1;
  return requeryT === -1 ? true : requeryT >= isExpiringIn;
};

export const checkTokenStatus = () => {
  let response = true;
  let inputterTokenEnabled = true;
  let tokenEnabled = true;

  let httpClientJwt = httpServiceInterfaceOauth2.getJwt();

  if (isNullOrUndefined(httpClientJwt)) {
    return response;
  } else {
    let accessJwt: any = parseJwt(httpClientJwt);
    inputterTokenEnabled =
      !isNullOrUndefined(accessJwt) && !isNullOrUndefined(inputterTokenEnabled)
        ? accessJwt.corporate_inputter_token_enabled
        : inputterTokenEnabled;

    tokenEnabled =
      !isNullOrUndefined(accessJwt) && !isNullOrUndefined(tokenEnabled)
        ? accessJwt.user_token_enabled
        : tokenEnabled;

    if (inputterTokenEnabled || (!inputterTokenEnabled && tokenEnabled)) {
      return response;
    } else {
      return false;
    }
  }
};

export const getTokenVal = () => {
  return httpServiceInterfaceOauth2.getJwt();
};

export const ParseUploadedJson = (jsonArray: any[]) => {
  // The first object of the array is not neccessary
  jsonArray.shift()

  // extract the headings
  const headings: any[] = Object.values(jsonArray[0])

  // remove the heading row
  jsonArray.shift()

  let totalAmount = 0
  // Create a Json object that properly represents the excel file
  const CsvObjectArray = jsonArray.map((row) => {
    const rowValuesArray = Object.values(row)
    const rowObject: any = {}
    for (let i = 0; i < headings.length; i++) {
      rowObject[headings[i]] = rowValuesArray[i]
      if (headings[i] === "AMOUNT") totalAmount = totalAmount + Number(rowValuesArray[i])
    }
    return rowObject
  })
  return { CsvObjectArray, totalAmount }
}

export const defineMandateRule = (mandateType?: string) => {
  let mandateRule = Object.assign({ globalRule: true });
  switch (mandateType) {
    case defaultAppValues.mandateTypes.accountBasedMandateType:
      mandateRule = { accountRule: true };
      break;
    case defaultAppValues.mandateTypes.amountBasedMandateType:
      mandateRule = { amountRule: true };
      break;
    case defaultAppValues.mandateTypes.moduleBasedMandateType:
      mandateRule = { moduleRule: true };
      break;
    default:
      break;
  }
  return mandateRule;
};

export const pageRefresher = (url = "") => {
  setTimeout(() => {
    if (url !== "") {
      window.location.href = url;
    } else {
      window.location.reload();
    }
  }, metricValues.timeToPageReloadAfterSuccess);
};
