import axios from "axios";

axios.defaults.baseURL = "http://localhost:8888";

export async function authen(user) {
  try {
    const response = await axios.post("/login", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
