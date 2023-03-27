import axiosInterface from "./axiosInterface";

async function checkDuplicationAPI(type, value) {
  const response = await axiosInterface(
    "POST",
    "/users/duplication",
    {},
    {},
    {
      type,
      value,
    }
  );
  console.log("checkDuplicationAPI: ", response);
  if (response.status === 200) {
    return response;
  }

  return response;
}

export default checkDuplicationAPI;
