export const onboardingService = `${process.env.REACT_APP_API_BASE_URL}/api/user`;
export const authBaseUrl = `${process.env.REACT_APP_API_BASE_URL}/api/user`;
export const authUrl = `${process.env.REACT_APP_API_BASE_URL}/api/auth`;



export const base = process.env.REACT_APP_API_BASE_URL;
export const endpoints = {
  //USER ONBOARDING RELATED
  addUser: onboardingService.concat(`/signup`),
  getDrivers: onboardingService.concat(`/get/all`),
  getDriverById: onboardingService.concat(`/:id`),
  getAdmins: onboardingService.concat(`/get/all`),
  // getUserById: onboardingService.concat(`/
  updateDriverById: onboardingService.concat(`/update/:id`),
  deleteDriverById: onboardingService.concat(`/delete`),
  // router.route("/status/:userId").get(getRegistrationStatusById);
  getDriverRegStatus: onboardingService.concat(`/status/:userId`),

  //AUTH
  login: authBaseUrl.concat(`/login`),
  adminLogin: authBaseUrl.concat(`/admin-login`),
  requestResetPassword: authUrl.concat(`/requestResetPassword`),
  passwordReset: authUrl.concat(`/password-reset`),
  //   register : authBaseUrl.concat(`
};
