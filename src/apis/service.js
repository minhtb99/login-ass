import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export async function getUsers() {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
