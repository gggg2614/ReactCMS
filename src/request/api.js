import request from "./request";

export function loginByUsername(username, password) {
  const data = {
    username,
    password,
  };
  return request({
    url: "/register/",
    method: "POST",
    data,
  });
}
