import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  } catch (error) {
    throw new Error("에러");
  }
};
