import axiosInterface from "./axiosInterface";

async function checkCodeAPI(email, nickname) {
  const response = await axiosInterface("POST", "/users/check", {
    email,
    nickname,
  });
  console.log("checkCodeAPI: ", response);
  if (response.status === 200) {
    return response;
  }

  return response.response;
}

export default checkCodeAPI;
