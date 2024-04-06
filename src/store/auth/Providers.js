import { inkaApi } from "../../api/inkaApi";

export const createUser = async (data) => {
  try {
    const response = await inkaApi.post('/security/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("todo ok");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};