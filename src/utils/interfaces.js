import { UserAccount } from "../models/types";
import { codeValue, userDetails } from "./types";

export interface IReduxCorporateUsersSetupState {
  accountNumber: "";
  corporateDetails: {
    name: "";
    address: "";
    email: "";
    mobilePhoneNumber: "";
    officePhoneNumber: "";
    cbaCustomerId: "";
    postingOptionId: "";
    suspenseAccountId: "";
    tokenEnabled: false;
    soleProprietor: false;
    corporateTypeId: "";
    autoApprovalEnabled: "";
    verifierTokenEnabled: false;
    inputterTokenEnabled: "";
    authorizerTokenEnabled: "";
    narrationOptionId: "";
    hasToken: "";
    sme: false;
    code: "";
    defaultApprovalLevelCount: "";
    defaultMandateSignatoryCount: "";
    verifierEnabled: "";
    corporateAccounts: any[];
    corporateChannels: any[];
  };
  corporateUserDetails: userDetails[];
  currentUserDetails: userDetails;
}

export interface IRequestHeader {
  requestTypeCode: string;
  menuCode: string;
  requestReference: string;
  contextUrl: string;
  userSessionId: string;
}

// export interface IDropdownState {
//   mandateTypes: [];
//   approvalOptions: [];
//   narrationOptions: [];
//   userTypes: [];
//   roles: [];
//   authenticationModes: {
//     responses: codeValue[];
//   };
// }

export interface IUserMgtState {
  currentUserAccountDetails: UserAccount;
  onboardUserDetails: {
    corporateId: "";
    corporateCode: "";
    username: "";
    password: "";
    firstName: "";
    lastName: "";
    middleName: "";
    email: "";
    mobilePhoneNumber: "";
    officePhoneNumber: "";
    address: "";
    jobTitle: "";
    userTypeId: "";
    enforcePasswordChange: false;
    approvalLimit: 0;
    transferLimit: 0;
    globalAccountAccessEnabled: false;
    signatory: false;
    autoApprovalEnabled: false;
    tokenEnabled: false;
    tokenDelivered: false;
    viewBalanceEnabled: false;
    authenticationModeId: 0;
    departmentId: "";
    tokenTypeId: "";
    userAccounts: any[];
    userChannels: any[];
    userRoles: any[];
    userApprovalGroups: any[];
  };
  userAccountAccessData: {};
}

export interface IDropdownState {
  mandateTypes: [];
  approvalOptions: [];
  narrationOptions: [];
}
export interface IMandateSetup {
  modules: [];
  mandateDetails: {
    sequentialApproval: "";
    financial: boolean;
    corporateAccountId: "";
    moduleId: "";
    globalRule: "";
    tranTypeId: "";
    departmentId: "";
    corporateId: "";
    signatoryCount: "";
    approvalLevelCount: "";
    mandateTypeId: "";
    approvalOptionId: "";
    accountRule: boolean;
    moduleRule: boolean;
    amountRule: boolean;
    name: "";
    description: "";
    lowestLimitAmount: "";
    highestLimitAmount: "";
    mandateSignatories: "";
  };
}
// export interface IUserMgtState {
//   // @ts-ignore
//   onboardUserDetails: {
//     corporateId: "";
//     username: "";
//     password: "";
//     firstName: "";
//     lastName: "";
//     middleName: "";
//     email: "";
//     mobilePhoneNumber: "";
//     officePhoneNumber: "";
//     address: "";
//     jobTitle: "";
//     userTypeId: "";
//     enforcePasswordChange: false;
//     approvalLimit: 0;
//     transferLimit: 0;
//     globalAccountAccessEnabled: false;
//     signatory: false;
//     autoApprovalEnabled: false;
//     tokenEnabled: false;
//     tokenDelivered: false;
//     viewBalanceEnabled: false;
//     authenticationModeId: 0;
//     departmentId: "";
//     tokenTypeIde: "";
//     lastLogonDate: "";
//     lastPasswordChangeDate: "";
//     lastLockedDate: "";
//     lockedFlag: "";
//     lockedBy: "";
//   };
// }
