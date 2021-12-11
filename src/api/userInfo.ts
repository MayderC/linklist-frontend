/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const URI = `${process.env.VUE_APP_API_URI}/user`;

export const getUserLinks = async (username: any) => {
  const response = await fetch(`${URI}/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
