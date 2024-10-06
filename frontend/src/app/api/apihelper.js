// src/api/apiHelper.js

import axios from 'axios';

// Base URL for your API
const BASE_URL = 'http://localhost:8000/api/users';

// Helper function for making API calls
const apiHelper = async (url, method = 'GET', data = null, headers = {}) => {
  try {
    const config = {
      method,
      url: `${BASE_URL}${url}`, // Append the endpoint to the base URL
      headers: {
        'Content-Type': 'application/json',
        ...headers, // Spread any additional headers passed
      },
      data: data ? JSON.stringify(data) : null, // Only include data if it exists
    };

    const response = await axios(config);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('API call error:', error.response || error.message); // Log error details
    throw error; // Rethrow the error for further handling if needed
  }
};

export default apiHelper;
