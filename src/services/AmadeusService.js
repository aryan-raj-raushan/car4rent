import axios from "axios";

const BASE_URL = "https://test.api.amadeus.com";
const API_KEY = process.env.REACT_APP_AMADEUS_API_KEY;
const API_SECRET = process.env.REACT_APP_AMADEUS_API_SECRET;

export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/v1/security/oauth2/token`,
      `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};
