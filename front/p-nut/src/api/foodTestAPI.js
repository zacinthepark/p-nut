import axiosInterface from "./axiosInterface";

async function foodTestAPI(foodId, userEmail) {
  const response = await axiosInterface(
    "get",

    "/foods/info",
    "",
    "",
    {
      food_id: foodId,
      user_email: userEmail,
    }
  );
  if (response.status === 200) {
    return response;
  }
  return response.response;
}

export default foodTestAPI;
