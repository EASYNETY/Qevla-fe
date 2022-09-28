import { v4 as uuidv4 } from "uuid";
import { encryptStorage } from "./encryptor";
// import { utils, writeFile } from "xlsx";
import { getTokenVal, isEmptyArray, isEmptyString, isNullOrUndefined, parseJwt } from "./tools";

export const generateRandomChars = (length: number = 31) => {
  const chars = uuidv4();
  const uuidChars = chars.toString().replace(/-/g, "");
  return uuidChars.substring(1, length);
};

export const generateRandomNumber = (max: number = 10) => {
  return Math.floor(Math.random() * max) + 1;
};

export const generateNumericString = (length: number) => {
  let chars = "0123456789";
  let randomNumericString = "";
  for (let i = 0; i < length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomNumericString += chars.substring(rnum, rnum + 1);
  }
  return randomNumericString;
};

export const formatNumber = (str: string) => {
  try {
    if (isNullOrUndefined(str)) throw new Error("Invalid value found")
    str = Number(str).toLocaleString()
    let dotIndex = str.indexOf(".")
    if (dotIndex === -1) str = str + ".00"
    else if (str.length - dotIndex === 2) str = str + "0"
    return str
  } catch (error) {
    return "N/A"
  }

}

export const filterData = (data: any[], filterby: string, queryText: string) => {
  if (isEmptyString(filterby) || isEmptyString(queryText) || isEmptyArray(data)) return data
  return data.filter(item => item[filterby].toLowerCase().includes(queryText.toLowerCase()));
}

export const getValueFromUserDetail = (valueToGet: any) => {
  let valueToReturn;
  let tokenVal = getTokenVal();
  let userDetails = parseJwt(tokenVal);
  switch (valueToGet) {
    case "username":
      let username = !isNullOrUndefined(userDetails)
        ? userDetails?.user_name
        : "";
      valueToReturn = username;
      break;
    case "firstName":
      let encFName = encryptStorage.getItem("firstName");
      let firstName = !isNullOrUndefined(encFName) ? encFName : "";
      valueToReturn = firstName;
      break;
    case "tokenEnabled":
      let tokenEnabled = !isNullOrUndefined(userDetails)
        ? userDetails?.user_token_enabled
        : "";
      valueToReturn = tokenEnabled;
      break;
    case "isLoggedIn":
      valueToReturn = !isNullOrUndefined(encryptStorage.getItem("isLoggedIn"))
        ? encryptStorage.getItem("isLoggedIn")
        : "false";
      break;
    case "userRole":
      let userRole = !isNullOrUndefined(userDetails)
        ? userDetails?.roleIds
        : "";
      valueToReturn = userRole;
      break;
    case "userId":
      let userId = !isNullOrUndefined(userDetails)
        ? userDetails?.user_id
        : "";
      valueToReturn = userId;
      break;
    case "corporateId":
      let corporateId = !isNullOrUndefined(userDetails)
        ? userDetails?.corporate_id
        : "";
      valueToReturn = corporateId;
      break;
    case "corporateCode":
      let corporateCode = !isNullOrUndefined(userDetails)
        ? userDetails?.corporate_code
        : "";
      valueToReturn = corporateCode;
      break;
    case "companyName":
      let encComName = encryptStorage.getItem("companyName");
      let companyName = !isNullOrUndefined(encComName) ? encComName : "";
      valueToReturn = companyName;
      break;

    default:
      valueToReturn = "";
      break;
  }
  return valueToReturn;
};

// export const exportData = (data: any, outputFormat: string) => {
//   if (outputFormat === "excel") exportToExcel()
//   if (outputFormat === "csv") exportToCsv()

  // function getSheet() {
  //   return utils.json_to_sheet(data);
  // }

  // function exportToExcel() {
  //   const workSheet = getSheet();
  //   const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
  //   writeFile(workBook, "Account Statement.xlsx", { bookType: "xlsx" });
  // }

//   function exportToCsv() {
//     const workSheet = getSheet();
//     const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
//     writeFile(workBook, "Account Statement.csv", { bookType: "csv" });
//   }
// }
// export const useTimer = (initTime: number) => {
//   var duration = initTime;

//   var start = Date.now(),
//     diff,
//     minutes,
//     seconds;

//   function timer() {
//     diff = duration - (((Date.now() - start) / 1000) | 0);

//     minutes = (diff / 60) | 0;
//     seconds = diff % 60 | 0;

//     minutes = minutes < 10 ? "0" + minutes : minutes;

//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     if (diff <= 0) {
//       start = Date.now() + 1000;

//       clearInterval(myCountdown);
//     }
//   }

//   timer();

//   var myCountdown = setInterval(timer, 1000);
//   return { diff };
//};
