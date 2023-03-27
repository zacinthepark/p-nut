import axiosInterface from "./axiosInterface";

async function checkCodeAPI(email, code) {
  const response = await axiosInterface("POST", "/users/email/check", {
    email,
    code,
  });
  console.log("checkCodeAPI: ", response);
  if (response.status === 200) {
    return response;
  }
  // 인증번호 만료 시 로직 필요

  return response;
}

export default checkCodeAPI;
