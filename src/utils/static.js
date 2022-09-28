
export const flagYesOrNoArr: any = [
  { name: true, label_value: "Yes", id: true },
  { name: false, label_value: "No", id: false },
];
export const approvalTypesArr: any = [
  { name: true, label_value: "Auto" },
  { name: false, label_value: "Manual" },
];
export const approvalOptionArr: any = [
  { name: "sequential", label_value: "Sequential" },
  { name: "non_sequential", label_value: "Non Sequential" },
];
export const authorizationTokenFlagArr: any = [
  { name: true, label_value: "All" },
  { name: false, label_value: "All but one must have token" },
];
export const suspenseAccountResponseArr: any = [
  { id: "2", code: "2", name: "Suspense 2" },
  { id: "1", code: "1", name: "Suspense 1" },
];
export const authenticationModesResponseArr: any = [
  { id: "2", code: "2", name: "Inbuilt" },
  { id: "1", code: "1", name: "AD" },
];
export const userRightsResponseArr: any = [
  { id: "VIEW", code: "2", name: "VIEW" },
  { id: "TRANSFER", code: "1", name: "TRANSFER" },
];
export const signatoryTypeArr: any = [
  { name: "individual", label_value: "Individual" },
  { name: "group", label_value: "Group" },
];
export const tokenTypeArr: any = [
  { id: "2", code: "2", name: "HARD" },
  { id: "1", code: "1", name: "SOFT" },
];
export const defaultNarrationArr: any = [
  {
    id: "sender_narration",
    name: "sender_narration",
    label_value: "Sender narration",
  },
  {
    id: "append_unique_id",
    name: "append_unique_id",
    label_value: "Append unique ID",
  },
];
export const debitOptionArr: any = [
  { name: "lump_sum", label_value: "Lump sum (recommended)" },
  { name: "debit_option", label_value: "Debit per transaction" },
];
export const platformsResponseArr: any = [
  { id: "MOBILE", name: "MOBILE", label_value: "Mobile" },
  { id: "WEB", name: "WEB", label_value: "Web" },
];

export const currencyArr: any = [
  { id: "NGN", name: "Naira", label_value: "Naira" },
];
// ,
//   { id: "EUR", name: "Euro", label_value: "Euro" },
//   { id: "USD", name: "Dollar", label_value: "Dollar" },
//   { id: "GBP", name: "Pounds", label_value: "Pounds" },
export const requestTypeArr: any = [
  { id: "PENDING", name: "Pending", label_value: "Pending" },
  { id: "APPROVED", name: "Approved", label_value: "Approved" },
  { id: "DECLINED", name: "Declined", label_value: "Declined" },
];
export const regNumberPrefixArr: any = [
  { id: "RC", name: "RC", label_value: "Registered Company" },
  { id: "BN", name: "BN", label_value: "Business Name" },
];
export const nextOfKinRelationshipArr: any = [
  { id: "BROTHER", name: "Brother", label_value: "Brother" },
  { id: "SISTER", name: "Sister", label_value: "Sister" },
  { id: "MOTHER", name: "Mother", label_value: "Mother" },
  { id: "FATHER", name: "Father", label_value: "Father" },
  { id: "SPOUSE", name: "Spouse", label_value: "Spouse" },
  { id: "OTHERS", name: "Others", label_value: "Others" },
];
export const paymentFrequencyArr: any = [
  { id: "DAILY", name: "Daily", label_value: "Daily" },
  { id: "MONTHLY", name: "Monthly", label_value: "Monthly" },
  { id: "WEEKLY", name: "Weekly", label_value: "Weekly" },
  { id: "BI_WEEKLY", name: "Bi-weekly", label_value: "Bi-weekly" },
];
export const complainTypesArr: any = [
  {
    id: "SERVICE_REQUEST",
    name: "Service request complaints",
    label_value: "Service request complaints",
  },
  {
    id: "TRANSACTION_COMPLAINTS",
    name: "Transaction complaints",
    label_value: "Transaction complaints",
  },
];
export const stateInCountryArr: any = [
  { id: "LAG", name: "Lagos", label_value: "Lagos" },
  { id: "ABJ", name: "Abuja", label_value: "Abuja" },
  { id: "RIVERS", name: "Rivers", label_value: "Rivers" },
];
export const deliveryLocationsArr: any = [
  { id: "LEKKI", name: "Lekki", label_value: "Lekki" },
  { id: "SURULERE", name: "Surulere", label_value: "Surulere" },
  { id: "CALABAR", name: "Calabar", label_value: "Calabar" },
];
export const transferTypesOptionsArr: any = [
  {
    id: "OWN_ACCOUNT_TRANSFER",
    name: "Own account transfer",
    label_value: "Own account transfer",
  },
  {
    id: "CORPORATE_TO_PARALLEX",
    name: "Transfer to parallex account",
    label_value: "Transfer to parallex account",
  },
  {
    id: "OTHER_BANKS",
    name: "Transfer to other banks",
    label_value: "Transfer to other banks",
  },
  {
    id: "TRANSFER_TO_BENEFICIARY",
    name: "Transfer to beneficiaries",
    label_value: "Transfer to beneficiaries",
  },
  {
    id: "INTERNATIONAL_TRANSFER",
    name: "Transfer to international banks",
    label_value: "Transfer to international banks",
  },
  {
    id: "BULK_UPLOAD",
    name: "Bulk upload ",
    label_value: "Bulk upload",
  },
];

export const serviceRequestTypesOptionsArr: any = [
  {
    id: "CHEQUEBOOK_REQUEST",
    name: "Chequebook request",
    label_value: "Chequebook request",
  },
  {
    id: "STOP_CHEQUE_REQUEST",
    name: "Stop cheque requests",
    label_value: "Stop cheque requests",
  },
  {
    id: "ISSUE_DEMAND_DRAFT_REQUEST",
    name: "Issue demand draft requests",
    label_value: "Issue demand draft requests",
  },
  {
    id: "STANDING_ORDER_REQUEST",
    name: "Standing order requests",
    label_value: "Standing order requests",
  },
  {
    id: "ACCOUNT_STATEMENT_REQUEST",
    name: "Account statement requests",
    label_value: "Account statement requests",
  },
  {
    id: "TRANSACTION_COMPLAINT_REQUEST",
    name: "Transaction complaint requests",
    label_value: "Transaction complaint requests",
  },
];

export const deliveryModeOptionsArr: any = [
  { id: "COURIER", name: "Courier", label_value: "Courier" },
  { id: "BANK_LOCATION", name: "Bank location", label_value: "Bank location" },
];
export const accountTypeOptionsArr: any = [
  { id: "ODA", name: "Current", label_value: "Current" },
  { id: "SBA", name: "Savings", label_value: "Savings" },
];
export const titleOptionsArr: any = [
  { id: "MR", name: "Mr.", label_value: "Mr." },
  { id: "MRS", name: "Mrs.", label_value: "Mrs." },
  { id: "DR", name: "Dr.", label_value: "Dr." },
  { id: "CHIEF", name: "Chief", label_value: "Chief" },
  { id: "PASTOR", name: "Pastor", label_value: "Pastor" },
  { id: "REVD.", name: "Revd.", label_value: "Revd." },
];
export const genderOptionsArr: any = [
  { id: "MALE", name: "Male", label_value: "Male" },
  { id: "FEMALE", name: "Female", label_value: "Female" },
];
export const religionOptionsArr: any = [
  { id: "CHRISTIANITY", name: "Christianity", label_value: "Christianity" },
  { id: "ISLAM", name: "Islam", label_value: "Islam" },
  { id: "TRADITIONAL", name: "Traditional", label_value: "Traditional" },
  { id: "OTHERS", name: "Others", label_value: "Others" },
];
export const idTypeOptionsArr: any = [
  {
    id: "NATIONAL_ID",
    name: "National identification number",
    label_value: "National identification number",
  },
  {
    id: "DRIVER_LICENCE",
    name: "Driver's licence",
    label_value: "Driver's licence",
  },
  {
    id: "INTERNATIONAL_PASSPORT",
    name: "International passport",
    label_value: "International passport",
  },
];

export const priorityLevelOptionsArr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const countriesArr: any = [
  { id: "NG", name: "Nigeria", label_value: "Nigeria" },
  { id: "US", name: "USA", label_value: "USA" },
  { id: "NON-US", name: "Other countries", label_value: "Other countries" },
];
export const beneficiaryTypesOptionsArr: any = [
  { id: "SINGLE", name: "Single", label_value: "Single" },
  { id: "MULTIPLE", name: "Multiple", label_value: "Multiple" },
];
export const debitModeOptionsArr: any = [
  {
    id: 1,
    name: "Single Debit Multiple Credit",
    label_value: "Single Debit Multiple Credit",
  },
  {
    id: 2,
    name: "Single Debit, Single Credit",
    label_value: "Single Debit, Single Credit",
  },
];
export const scheduleTransferActionOptionsArr: any = [
  {
    id: "NEW_SCHEDULE",
    name: "Create new schedule",
    label_value: "Create new schedule",
  },
  {
    id: "CANCEL_SCHEDULE",
    name: "Cancel previous schedule",
    label_value: "Cancel previous schedule",
  },
  {
    id: "EDIT_PREVIOUS_SCHEDULE",
    name: "Edit previous schedule",
    label_value: "Edit previous schedule",
  },
];
export const bankOptionsArr = [
  {
    id: "UBA",
    name: "United bank for Africa",
    label_value: "United bank for Africa",
  },
  { id: "GTB", name: "GTB", label_value: "GTB" },
  {
    id: "FBN",
    name: "First Bank of Nigeria",
    label_value: "First Bank of Nigeria",
  },
];
export const businessSectorsOptionsArr = [
  {
    id: "MSME",
    name: "MSME",
    label_value: "MSME",
  },
  { id: "COMMERCIAL", name: "Commercial", label_value: "Commercial" },
  {
    id: "CORPORATE",
    name: "Corporate",
    label_value: "Corporate",
  },
  {
    id: "PUBLIC_SECTOR",
    name: "Public sector",
    label_value: "Public sector",
  },
];
export const businessNaturesOptionsArr = [
  {
    id: "COMMERCE",
    name: "Commerce",
    label_value: "Commerce",
  },
  { id: "MANUFACTURING", name: "Manufacturing", label_value: "Manufacturing" },
  {
    id: "TEXTILE",
    name: "Textile",
    label_value: "Textile",
  },
  {
    id: "IT",
    name: "Information Technology",
    label_value: "Information Technology",
  },
];
export const companyCategoryOptionsArr = [
  {
    id: "COMMERCE",
    name: "Commerce",
    label_value: "Commerce",
  },
  { id: "MANUFACTURING", name: "Manufacturing", label_value: "Manufacturing" },
  {
    id: "TEXTILE",
    name: "Textile",
    label_value: "Textile",
  },
  {
    id: "IT",
    name: "Information Technology",
    label_value: "Information Technology",
  },
];
export const businessTypesOptionsArr = [
  {
    id: "LTD",
    name: "Limited Liability Company",
    label_value: "LTD",
  },
  {
    id: "SOLE_PROPIETORSHIP",
    name: "Sole propietorship",
    label_value: "Sole propietorship",
  },
  {
    id: "PARTNERSHIP",
    name: "Partnership",
    label_value: "Partnership",
  },
  {
    id: "MDAS",
    name: "MDAs (Ministry, Departments and Agencies)",
    label_value: "MDAs (Ministry, Departments and Agencies)",
  },
];
export const maritalStatusOptionsArr = [
  {
    id: "SINGLE",
    name: "Single",
    label_value: "Single",
  },
  {
    id: "MARRIED",
    name: "Married",
    label_value: "Married",
  },
  {
    id: "WIDOW(ER)",
    name: "Widow(er)",
    label_value: "Widow(er)",
  },
  {
    id: "DIVORCED",
    name: "Divorced",
    label_value: "Divorced",
  },
];

export const responseCodes = {
  NO_RECORD_FOUND: "25",
  FAILED: "01",
  SUCCESSFUL: "00",
  BAD_REQUEST: "400",
  UNAUTHORIZED: "401",
  INVALID_GRANT: "INVALID_GRANT",
  SERVICE_UNAVAILABLE: "503",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  ERROR_OCCURRED: "ERROR OCCURRED",
  ACCESS_DENIED: "ACCESS DENIED",
  PAGE_NOT_FOUND: "404",
};

export const menuCodes = {
  CREATE_MENU: "21",
  ASSIGN_MENU_TO_ROLE: "14",
  UPDATE_MENU: "21",
  RESET_PASSWORD: "4",
  CHANGE_PASSWORD: "4",
  ONBOARD_CORPORATE_SME: "3",
  ONBOARD_CORPORATE_ADMIN: "21",
  APPROVE_REQUEST: "21",
  CREATE_CORPORATE: "3",
  CREATE_MANDATE: "7",
  CREATE_USER_ACCOUNT_ACCESS: "9",
  FUND_TRANSFER: "25",
  UPDATE_USER_PROFILE: "4",
  TRANSFER_WITHIN: "25",
  ENABLE_OR_DISABLE_USER: "4",
  ADD_ACCOUNT_TO_CORPORATE: "8",
  CREATE_CORPORATE_DEPARTMENT: "13",
  UPDATE_USER_DETAILS: "4",
  UPDATE_DEPARTMENT_DETAILS: "13",

};

export const forbiddenResponseBody = {
  responseCode: "403",
  description: "You do not have sufficient right for this operation",
};

export const transactionLimit = 100000000;

export const extraSMEDetails = {
  tokenEnabled: true,
  soleProprietor: true,
  hasToken: true,
  sme: true,
  verifierEnabled: false,
  verifierTokenEnabled: false,
  inputterTokenEnabled: true,
  authorizerTokenEnabled: true,
  corporateTypeId: "4",
};

export const metricValues = {
  resendTime: 10,
  length: 6,
  bvnLength: 11,
  transactionPinLength: 8,
  pinValidationTimeout: 3000,
  maxFileSize: 4000000,
  accountNumberLength: 10,
  timeToPageReloadAfterSuccess: 2000,
  monthlyTurnoverMinimum: 0,
  monthlyTurnoverMaximum: 100,
  monthlyTurnoverStep: 10,
  monthlyTurnoverMultiplier: 1000000,
  corporateCodeMinLength: 2,
  usernameMinLength: 4,
  taxIdLength: 13,
  minRegNumberLength: 3,
  minPhoneNumberLength: 11,
  minCorporateCodeLength: 4,
  solePropietorBusinessTypeCode: "2",
  minimumTransferLimit: 1,
};

export const baseUrl = window.location.origin;

export const currentAppVersion = {
  version: process.env.REACT_APP_BUILD_VERSION,
};

export const hiddenMenuFieldsArr = [
  "authStat",
  "recordStat",
  "amount",
  "visible",
  "lastUpdatedById",
  "lastUpdatedDate",
  "transactionMenu",
  "menuAvailability",
  "transactionTypeId",
  "defaultMenu",
  "requestHeader",
  "menuHeader",
  "moduleId",
  "newMenu",
  "menuHeaderId",
  "displayOrder",
  "createdById",
  "chargeAmount",
  "expectedSignatoryCount",
  "actualSignatoryCount",
  "financial",
  "id",
  "lastUpdatedById",
  "lastUpdatedDate",
  "authStat",
  "recordStat",
  "corporateId",
  "mandateId",
  "mandateSignatoryId",
  "mandateTypeId",
  "expectedSignatoryCount",
  "actualSignatoryCount",
  "visible",
  "transactionTypeId",
  "transactionDescription",
  "amount",
  "approvalLevel",
  "expectedUserApprovalId",
  "expectedGroupApprovalId",
  "debitAccountNumber",
  "menuId",
  "chargeAmount",
];

export const menuOpsInvisibleItems = [
  "authStat",
  "recordStat",
  "amount",
  "visible",
  "lastUpdatedById",
  "lastUpdatedDate",
  "transactionMenu",
  "menuAvailability",
  "transactionTypeId",
  "defaultMenu",
  "requestHeader",
  "moduleId",
  "menuHeaderId",
  "displayOrder",
  "createdById",
  "name",
  "code",
  "platformId",
  "roleId",
  "id",
  "createdDate",
  "createdBy",
  "parentMenu",
  "childMenu",
  "transactionMenu",
  "menuHeader",
  "newMenu",
  "financial",
];

export const radiosItems = ["parentMenu", "childMenu", "transactionMenu"];

export const visibleMenuFieldItems = [
  "menuController",
  "mobileMenuController",
  "serviceEndpoint",
  "parentMenu",
  "childMenu",
  "menuName",
  "menuAvailability",
  "transactionMenu",
  "description",
];

export const searchableMenufieldsArr = ["createdById", "menuTypeId"];

export const rangePickerRequestTypesArr = ["APPROVED", "DECLINED"];

export const visibleTransactionReceiptFieldsArr = [
  "tranDate",
  "tranStatus",
  "tranNarration",
  "tranAmount",
  "beneficiariesAcc",
  "beneficiariesName",
  "bankName"
];

export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const TINPattern = /^(\d{8})-\d{4}$/;
export const accountNumberPattern = /^(\d{10})$/;
export const bvnPattern = /^(\d{11})$/;
export const environmentV = "NORMAL";
export const corporateCodePrefix = "PAR";
export const corporateNameSubstringLength = 3;
export const defaultApprovalLimit = 10000;
export const defaultTransferLimit = 10000;
export const defaultTransactionLimit = 100000000;
export const defaultCurrency = "NGN";
export const defaultAppValues = {
  defaultPaymentChannel: 1,
  corporateChannelId: "1",
  defaultTnxFees: "50",
  showOnlyCorporateProducts: true,
  corporateProductsFlag: "C",
  parallexBankCode: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "999015" : "000030",
  parallexBankName: "Parallex Bank",
  accountType: "CASA",
  businessTypeCodeSolePropietor: "2",
  typeIdForOtherNonSME: "3",
  senderPaysFee: true,
  idleTimeoutInMs: 600000,
  defaultCurrency: "NGN",
  defaultCurrencyName: "Nigerian Naira (NGN)",
  defaultCountryOfIncorporation: "NGN",
  defaultBusinessTypePrefix: "RC",
  debitMode: "1",
  groupUserTypeId: "2",
  alertTimeout: 5000,
  baseCurrency: "EUR",
  adminMakerUserTypeId: "4",
  adminCheckerUserTypeId: "3",
  smeCorporateTypeId: "4",
  smeBusinessTypeId: "2",
  channel: "WEB",
  ftChannel: "2",
  isFtDirectToParallex: false,
  transactionLocation: "LAGOS",
  postingOptionId: "1",
  suspenseAccountId: "1",
  narrationOptionId: "1",
  smeAdminBusinessTypeDefaults: {
    approvalLimit: defaultApprovalLimit,
    transferLimit: defaultTransferLimit,
    globalAccountAccessEnabled: true,
    signatory: true,
    autoApprovalEnabled: true,
    tokenEnabled: true,
    tokenDelivered: false,
    viewBalanceEnabled: true,
    authenticationModeId: 1,
    userTypeId: "1",
  },
  smeCorporateBusinessTypeDefaults: {
    autoApprovalEnabled: true,
    verifierTokenEnabled: false,
    inputterTokenEnabled: true,
    authorizerTokenEnabled: true,
    verifierEnabled: false,
    hasToken: true,
    soleProprietor: true,
    sme: true,
  },
  transferTypesString: "Transfer",
  mandateTypes: {
    accountBasedMandateType: "1",
    transactionTypeBasedMandateType: "2",
    moduleBasedMandateType: "3",
    deptBasedMandateType: "4",
    genericBasedMandateType: "5",
    amountBasedMandateType: "6",
  },
};
export const appUserRoles = {
  SYSTEM_WIDE_MAKER: 2,
  SYSTEM_WIDE_CHECKER: 1,
  REGULAR_CORPORATE_MAKER: 3,
  REGULAR_CORPORATE_CHECKER: 4,
};
export const pageFlows = {
  ACCOUNT_CREATION: "account_creation",
  CORPORATE_PROFILING: "corporate_profiling",
  CORPORATE_ONBOARDING: "corporate_onboarding",
};
export const geolocationFinderUrl =
  "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572";
// export const apiKeyForForexApi = "01a06eaf0d0836be23655de6276542d5";
// export const forexApiUrl =
//   "http://api.exchangeratesapi.io/v1/latest?access_key=";
