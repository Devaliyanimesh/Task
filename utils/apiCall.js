import axios from 'axios'; // 👈 zaroori hai

export const fetchData = async (url, method) => {
  try {
    const response = await axios({
      url,
      method,
    });

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message || "Something went wrong" };
  }
};
