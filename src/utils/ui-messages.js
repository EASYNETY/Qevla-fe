import { metricValues } from "./static";

export const responseMessage = {
  ACCESS_DENIED: "Access is denied .... Please check your credentials",
  ACCOUNT_DIGITS_MUST_BE_10: "A 10 digit Account number is required",
  ACCOUNT_NUMBER_IS_FOUND: "Account number is found",
  ACCOUNT_RECORD_NOT_FOUND: "Account details not found ....",
  ACCOUNT_STATEMENT_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Account statement request submitted successfully",
  APPROVAL_GROUP_CREATION_SUCCESSFUL: "Approval group creation successful",
  APPROVAL_GROUP_CREATION_FAILED: "Approval group creation failed",
  APPROVAL_GROUP_DELETE_SUCCESSFUL: "Approval group deletion successful",
  APPROVAL_GROUP_DELETE_FAILED: "Approval group deletion failed",
  APPROVAL_GROUP_UPDATE_SUCCESSFUL: "Approval group update successful",
  APPROVAL_GROUP_UPDATE_FAILED: "Approval group update failed",
  BAD_REQUEST: "One or more required fields are not adequately supplied",
  BENEFICIARY_LIMIT_EXCEEDED: "You can not add more than ".concat(
    String(process.env.REACT_APP_MAXIMUM_BENEFICIARY_COUNT),
    " beneficiaries"
  ),
  CHANGED_PASSWORD_FAILED:
    "Changed password failed | Please confirm your details",
  CHANGED_PASSWORD_SUCCESSFULLY:
    "Changed password successful | Please login with new password",
  CHEQUE_BOOK_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Cheque book request submitted successfully",
  CODE_LENGTH: "Code should be  ",
  CODE_SENT_TO_YOUR_EMAIL: "{CODE} has been sent to your email",
  CODE_SENT_TO_YOUR_PHONE: "{CODE} has been sent to your phone number",
  CORPORATE_ACCOUNT_ONBOARDED_SUCCESSFULLY:
    "Corporate account onboarded successfully ...",
  CORPORATE_CODE_NOT_AVAILABLE:
    "Corporate code chosen is not available ... check another",
  CORPORATE_CODE_COULD_NOT_BE_VALIDATED:
    "Corporate code could not be validated",
  CORPORATE_CODE_IS_AVAILABLE: "Corporate code is available",
  CORPORATE_SME_ONBOARDING_FAILED: "Corporate SME onboarding failed",
  CORPORATE_SME_ONBOARDING_SUCCESSFUL:
    "Corporate SME onboarding was successful",
  COULD_NOT_FETCH: "Ooops ! Could not fetch ",
  DIRECTOR_ADDED_FAILED: "Director could not be added",
  DIRECTOR_ADDED_SUCCESSFULLY: "Director added successfully",
  DEPARTMENT_CREATED_SUCCESSFULLY: "Department created successfully",
  DESTINATION_ACCOUNT_HAS_BEEN_PREVIOUSLY_ADDED:
    "Account has been previously added as a beneficiary",
  ERROR_OCCURRED: "Error occurred ... Please contact admin",
  FAILED: "FAILED",
  FILE_TOO_LARGE: "File too large",
  FUND_TRANSFER_SUCCESSFUL: "Fund transfer was successful",
  FUND_TRANSFER_FAILED: "Fund transfer failed ... please try again later",
  INCOMPLETE_PIN_OR_TOKEN:
    "You have not passed the complete token. Please verify!",
  INITIATOR_BVN_OR_CORRELATIONID:
    "Initiator BVN or correlation ID can not be empty. You must provide one of the two information",
  INVALID_BVN_OR_DATE_COMBINATION: "Invalid bvn and date of birth combination",
  INVALID_LOGIN_CREDENTIALS:
    "Invalid Login credentials ! Please check your username/password",
  INVALID_OTP: "Invalid OTP was provided ! Please enter the correct value",
  INVALID_REG_NUMBER: "Invalid Registration number / Business not registered",
  INVALID_GRANT: "Access denied by connecting service ... Contact admin",
  ISSUE_DEMAND_DRAFT_SUBMITTED_SUCCESSFULLY:
    "Issue demand draft request submitted successfully",
  IS_FOUND: "Is found",
  MB_PIN_CHANGE_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Mobile banking pin change request submitted successfully",
  MENU_UPDATE_SUCCESSFUL:
    " Menu update Request has been sent successfully ... May require approval before is usable",
  MANDATE_CREATION_SUCCESSFUL:
    " Mandate creation successful ... May require approval before is usable",
  MANDATE_UPDATE_SUCCESSFUL:
    " Mandate update successful ... May require approval before is usable",
  MANDATE_UPDATE_FAILED: " Mandate update failed ...",
  MANDATE_CREATION_FAILED: " Mandate creation failed ...",
  MANDATE_SIGNATORY_UPDATE_SUCCESSFUL:
    "Mandate signatory update successful ... May require approval before is usable",
  MANDATE_SIGNATORY_UPDATE_FAILED:
    "Mandate signatory update failed ... Contact support",
  MENU_CREATION_SUCCESSFUL:
    " Menu creation request has been submitted successfully ... May require approval before is usable",
  MENU_CREATION_FAILED: " Menu creation failed ... Contact support",
  MENU_DELETION_SUCCESSFUL:
    " Menu deletion successful ... May require approval before is usable",
  MENU_DELETION_FAILED: " Menu deletion failed ... Contact support",
  MENU_UPDATE_FAILED: " Menu update failed ... Contact support",
  NO_RECORD_FOUND: "No record found",
  OTP_LENGTH_GT_ZERO: "One time password length must be greater than zero",
  OTP_SENT_SUCCESSFULLY: "Cool! OTP sent successfully ... ",
  REFERENCE_ADDED_SUCCESSFULLY:
    "Corprate reference details was added successfully",
  REFERENCE_ADDITION_FAILED: "Corprate reference details could not be added",
  REG_NUMBER_FOUND: "Registration number search was successful",
  REQUEST_APPROVAL_FAILED: "Request could not be approved. Try again later",
  REQUEST_APPROVAL_SUCCESSFUL: "Request approved successfully",
  REQUEST_DECLINE_SUCCESSFUL: "Request declined successfully",
  REQUEST_DECLINE_FAILED: "Request could not be declined. Try again later",
  RESET_PASSWORD_FAILED: "Reset password process could not be initiated",
  SERVICE_UNAVAILABLE:
    "Service is currenty unavailable .. Please try again later",
  SERVICE_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Service request submitted successfully",
  SIGNATORY_ADDED_SUCCESSFULLY: "Signatory added successfully",
  SOME_REQUEST_APPROVAL_FAILED:
    "Some Request could not be approved. Contact admin",
  STANDING_ORDER_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Standing order request submitted successfully",
  STAGING_ENTITY_DATA_SUBMITTED_SUCCESSFULLY:
    "Staging entity submitted successfully",
  STAGING_ENTITY_DATA_SUBMISSION_FAILED: "Staging entity submission failed",
  STOP_CHEQUE_REQUEST_SUBMITTED_SUCCESSFULLY:
    "Stop cheque request submitted successfully",
  SUCCESSFUL: "Cool! Successful operation ... ",
  SESSION_EXPIRED: "It appears session is expired , please login again ... ",
  SERVICE_ENDPOINT_NOT_REACHABLE: "Service endpoint not reachable",
  TNX_PIN_VALID: "Cool! Transaction pin validated ... ",
  USERNAME_IS_AVAILABLE: "Username is available",
  USER_ADDED_TO_APPROVAL_GROUP_SUCCESSFULLY:
    "User added to approval group successfully",
  USER_ADDING_TO_APPROVAL_GROUP_FAILED:
    "User could not be added to approval group",
  USERNAME_NOT_AVAILABLE: "Username not available",
  USERNAME_MUST_BE_UNIQUE: "Username must be unique",
  USERNAME_CAN_NOT_BE_EMPTY: "Username can not be empty",
  UNABLE_TO_UPLOAD_FILE: "Unable to upload file",
  REQUEST_COULD_NOT_BEEN_AUTHENTICATED: "Request could not be authenticated",
  REGISTRATION_MIN_NUMBER_LENGTH:
    "Registration number length must not be less than ".concat(
      metricValues.minRegNumberLength.toString(),
      " characters"
    ),
  REG_COULD_NOT_BE_VALIDATED:
    "Registration number could not be validated . Please enter your company name manually",
  USER_ADDED_TO_CORPORATE_SUCCESSFULLY:
    "User added to corporate successfully ...",
  FEEDBACK_SENT_SUCCESSFULLY: "Feedback sent successfully",

};
