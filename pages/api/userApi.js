import axios from "axios";

const apiUrl = "https://your-api-url.com"; // Replace with your API URL

export const signupApi = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
