/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

export const setlocalStorage = (token: string, username: string, bol: boolean) => {

  localStorage.setItem("token", token);
  localStorage.setItem("isLogin", JSON.stringify(bol));
  localStorage.setItem("username", username);

  return true

};

export const removeLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
  localStorage.removeItem("username");

  return true

};
