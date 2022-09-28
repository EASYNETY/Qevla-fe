import { IRequestHeader } from "../utils/interfaces";

export type AccountDetails = {
  name: string;
  balance: number;
  account_number: number;
};

export type AccountCreationType = {
  bvn: string;
  balance?: number;
};


export type RecipientDetails = {
  account_number: number;
  bank: string;
};

export type CorporateAccount = {
  corporateId: string;
  accountNumber: string;
  accountName: string;
  accountType: string;
  ccy: string;
  transactionLimitAmount: string;
};

export type UserAccount = {
  corporateAccountId: string;
  rights: string;
  transferLimit: number;
  viewBalanceEnabled: boolean;
};

export type CorporateChannel = {
  channelId: string;
};
export type UserChannel = {
  corporateChannelId: string;
};
export type UserRole = {
  roleId: string;
};
export type UserApprovalGroup = {
  approvalGroupId: string;
};
export type ClientCred = {
  username: string;
  password: string;
  corporateCode: string;
};

export type ResponseBody = {
  responseCode: string;
  data?: any;
  description?: string;
  message?: string;
  hasError?: boolean;
};

export type CreateMandateRequest = {
  requestHeader: IRequestHeader;
  sequentialApproval: string;
  financial: boolean;
  corporateAccountId: any;
  moduleId: any;
  globalRule: boolean;
  tranTypeId: any;
  departmentId: any;
  corporateId: string;
  signatoryCount: string;
  approvalLevelCount: string;
  mandateTypeId: string;
  approvalOptionId: string;
  accountRule: boolean;
  moduleRule: boolean;
  name: string;
  description: string;
  amountRule: boolean;
  lowestLimitAmount: number;
  highestLimitAmount: number;
};

export type OnboardUserRequest = {
  requesHeader: IRequestHeader;
  corporateId: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  mobilePhoneNumber: string;
  officePhoneNumber: string;
  address: string;
  jobTitle: string;
  userTypeId: string;
  enforcePasswordChange: boolean;
  approvalLimit: number;
  transferLimit: number;
  globalAccountAccessEnabled: boolean;
  signatory: boolean;
  autoApprovalEnabled: boolean;
  tokenEnabled: boolean;
  tokenDelivered: boolean;
  viewBalanceEnabled: boolean;
  authenticationModeId: number;
  departmentId: string;
  tokenTypeIde: string;
  userAccounts: CorporateAccount[];
  userRoles: UserRole[];
  userChannels: CorporateChannel[];
};
