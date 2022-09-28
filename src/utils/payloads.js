import { IRequestHeader } from './interfaces';
import { UserAccount } from './types';

export type AddUserToCorporate = {
  requestHeader: IRequestHeader;
  userAccounts: [UserAccount];
  userRoles: [{}];
  userChannels: [{}];
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
  enforcePasswordChange: string;
  approvalLimit: number;
  transferLimit: number;
  globalAccountAccessEnabled: false;
  signatory: false;
  autoApprovalEnabled: false;
  tokenEnabled: true;
  tokenDelivered: false;
  viewBalanceEnabled: false;
  authenticationModeId: number;
  departmentId: number;
  tokenTypeIde: number;
  lastLogonDate: string;
  lastPasswordChangeDate: string;
  lastLockedDate: string;
  lockedFlag: string;
  lockedBy: string;
};

export type AccountValidation = {
  account_number: string;
};
