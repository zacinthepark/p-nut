import axios from "axios";

export default async function djangoAPI(
  method,
  url,
  data = {},
  headers = {},
  params = {}
) {
  const baseURL = "http://j8a704.p.ssafy.io:8000";
  // django
  // Authorization Not Required
  let response = await axios({
    method: method,
    url: url,
    baseURL: baseURL,
    data: data,
    headers: headers,
    params: params,
  })
    .then((res) => res)
    .catch((err) => {
      return err;
    });

  return response;
}
