import axiosInterface from "./axiosInterface";

async function getUserInfo() {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  let accessToken = authentication.authentication.token;
  const { refreshToken } = authentication.authentication;
  const { email } = authentication.authentication;
  const checkResponse = await axiosInterface("post", "/users/check", "", {
    Authorization: accessToken,
  });
  if (checkResponse.status === 202) {
    const refreshResponse = await axiosInterface(
      "post",
      "/users/refresh",
      {
        email: email,
      },
      {
        Authorization: refreshToken,
      }
    );
    accessToken = refreshResponse.data["access-token"];
  }
  const response = await axiosInterface("get", `/users/${email}`, "", {
    Authorization: accessToken,
  });

  if (response.status === 200) {
    return response.data.userInfo;
  }

  return response.response;
}

export default getUserInfo;
