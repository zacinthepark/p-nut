import axiosInterface from "./axiosInterface";

/*
Request needs email, password
Response status: OK, ACCEPTED, INTERNAL_SERVER_ERROR
*/

async function loginAPI(email, password) {
  const response = await axiosInterface("POST", "/users/login", {
    email,
    password,
  });
  if (response.status === 200) {
    return response;
  }

  return response.response;
}

export default loginAPI;
