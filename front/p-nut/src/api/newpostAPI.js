import axiosInterface from "./axiosInterface";

export default async function newpostAPI() {
  await axiosInterface("post", "/boards/create");
}
