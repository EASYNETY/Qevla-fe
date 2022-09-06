import { IRequestHeader } from "./interfaces";

export type AccountDetails = {
  name: string;
  balance: number;
  account_number: number;
};

export type RecipientDetails = {
  account_number: number;
  bank: string;
};

export type codeValue = {
  id: string;
  code: string;
  name: string;
};

export type Menus = {
  requestHeader?: IRequestHeader;
  id: number;
  code?: string;
  name?: String;
  description?: string;
  createdById?: string;
  createdDate?: string;
  lastUpdatedById?: string;
  lastUpdatedDate?: string;
  authStat?: string;
  recordStat?: string;
  menuName?: string;
  menuHeader?: boolean;
  menuController?: string;
  menuUrl?: string;
  displayOrder?: number;
  menuHeaderId?: number;
  menuControllerMethod?: string;
  parentMenu?: boolean;
  parentMenuId?: number;
  childMenu?: boolean;
  newMenu?: boolean;
  transactionMenu?: boolean;
  transactionTypeId?: number;
  menuTypeId?: number;
  financial?: boolean;
  moduleId?: number;
  menuAvailability?: string;
  defaultMenu?: boolean;
};

export type CorporateUsers = {
  name: string;
  phone_number: string;
  role: string;
  description: string;
  createdById: 1;
  createdDate: Date;
  lastUpdatedById: string;
  lastUpdatedDate: Date;
  authStat: string;
  recordStat: string;
  address: string;
  email: string;
  mobilePhoneNumber: number;
  officePhoneNumber: number;
  cbaCustomerId: number;
  postingOptionId: number;
  suspenseAccountId: number;
  autoApprovalEnabled: boolean;
  tokenEnabled: boolean;
  soleProprietor: boolean;
  corporateTypeId: number;
  verifierTokenEnabled: boolean;
  inputterTokenEnabled: boolean;
  authorizerTokenEnabled: boolean;
  narrationOptionId: number;
  hasToken: boolean;
  sme: boolean;
  verifierEnabled: boolean;
};

export type UserAccount = {
  corporateAccountId: string;
  rights: string;
  viewBalanceEnabled: string;
  transferLimit: string;
};

export type userDetails = {
  name: string;
  address: string;
  email: string;
  mobilePhoneNumber: string;
  officePhoneNumber: string;
  cbaCustomerId: string;
  postingOptionId: number;
  suspenseAccountId: number;
  autoApprovalEnabled: boolean;
  tokenEnabled: boolean;
  soleProprietor: boolean;
  corporateTypeId: number;
  verifierTokenEnabled: boolean;
  inputterTokenEnabled: boolean;
  authorizerTokenEnabled: boolean;
  narrationOptionId: number;
  hasToken: boolean;
  sme: boolean;
  code: string;
  defaultApprovalLevelCount: number;
  defaultMandateSignatoryCount: number;
  verifierEnabled: boolean;
};
export type ApprovalRequest = {
  recordApprovalFlowId: string;
  approvalComment: string;
  approved: boolean;
  recordRequestReference: string;
  recordEntrySequenceNumber: number;
  requestHeader: any;
};
export type ChangePasswordRequest = {
  corporateId: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
export type ForgotPasswordNewPasswordRequest = {
  corporateId: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type GetCodeRequest = {
  username: string;
  corporateCode: string;
};

export type PersonalDetailsType = {
  bvn: string;
  maritalStatus: string;
  spouseName: string;
  spouseOccupation: string;
  nextOfKin: string;
  nokRelationship: string;
  residentialAddress: string;
  requestFlowReference: string;
  correlationId: string;
};

export type AccountBusinessDetail = {
  business_name: string;
  business_type: string;
  business_address: string;
  business_nature: string;
  business_sector: string;
};

export type Director = {
  bvn: string;
  dateOfBirth: string;
  email: string;
  firstName: string;
  isSignatory: true;
  lastName: string;
  localGovtArea: string;
  maritalStatus: string;
  nationality: string;
  nextOfKin: string;
  nokRelationship: string;
  otherName: string;
  phoneNumber: string;
  requestReferenceId: string;
  residentialAddress: string;
  spouseName: string;
  spouseOccupation: string;
  stateOfOrigin: string;
};

// export  AdminType {
//   MAKER,
//   CHECKER,
// }

export const BusinessEntityType = {
  SIGNATORY: ["Signatory", "SIGNATORY"],
  COMPANY: ["Company", "COMPANY"],
  DIRECTOR: ["Director's", "DIRECTOR"],
  CORPORATE_REFERENCE: ["Corporate reference's", "CORPORATE_REFERENCE"],
};

// export enum ServiceRequestTypesEnum {
//   CHEQUEBOOK_REQUEST,
//   STOP_CHEQUE_REQUEST,
//   ISSUE_DEMAND_DRAFT_REQUEST,
//   STANDING_ORDER_REQUEST,
//   TRANSACTION_COMPLAINT_REQUEST,
//   ACCOUNT_STATEMENT_REQUEST,
// }

// export enum dropdownOptionsTypeEnum {
//   OBJECTS,
//   ARRAYS,
// }
export type Error = {
  error?: string;
  error__description?: string;
};

export type FormFields = {
  selected_digits?: string;
  code?: string;
  corporate_id?: string;
  username?: string;
  password?: string;
  corporateCode?: string;
  errors: any;
};