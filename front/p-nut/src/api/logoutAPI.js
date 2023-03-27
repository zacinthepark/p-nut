import axiosInterface from "./axiosInterface";

/*
Request needs access-token in the header
*/

async function logoutAPI() {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  console.log("state: ", state);
  const authentication = JSON.parse(state.auth);
  const accessToken = authentication.authentication.token;
  console.log("logout");
  const response = await axiosInterface(
    "POST",
    "/users/logout",
    {},
    {
      "access-token": accessToken,
    }
  );
  console.log("logout response: ", response);
  if (response.status === 200) {
    return response;
  }
  return response;
}

export default logoutAPI;
