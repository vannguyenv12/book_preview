import instance from "./axios-customize";

export const registerUser = (fullName, email, password, phone) => {
  return instance.post("/api/v1/user/register", {
    fullName,
    email,
    password,
    phone,
  });
};

export const loginUser = (username, password) => {
  return instance.post("/api/v1/auth/login", {
    username,
    password,
  });
};

export const callFetchAccount = () => {
  return instance.get("/api/v1/auth/account");
};
