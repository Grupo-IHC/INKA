import { useState } from "react";
import { inkaApi } from "../api/inkaApi";

export const useInkaStore = () => {

  const [loading, setLoading] = useState(true);

  const getTypeSeals = async() => {
    try {
      const {data} = await inkaApi.get('/product/type');
      return data;
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  return {
    getTypeSeals,
    loading
  }
}