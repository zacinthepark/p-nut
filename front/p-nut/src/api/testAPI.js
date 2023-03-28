import axiosInterface from "./axiosInterface";

async function testAPI(boardId) {
  const state = JSON.parse(localStorage.getItem("persist:root"));
  const authentication = JSON.parse(state.auth);
  const accessToken = authentication.authentication.token;
  console.log("access-token: ", accessToken);

  const response = await axiosInterface(
    "POST",
    `/boards/like/${boardId}`,
    {},
    {
      Authorization: `Bearer ${accessToken}`,
    }
  );
  console.log("testAPI: ", response);
  if (response.status === 200) {
    return response;
  }

  return response;
}

export default testAPI;
