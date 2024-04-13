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
  const getTypeSealsById = async(id) => {
    try {
      const {data} = await inkaApi.get(`/product/?type=${id}`);
      console.log(data.product);
      return { type: data.type, category: data.category, product: data.product };

    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }
  const getProductFilterByCategory = async(id, categoryId) => {
    try {
      const {data} = await inkaApi.get(`/product/?type=${id}&category=${categoryId}`);
      return data.product;
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  return {
    getTypeSeals,
    getTypeSealsById,
    getProductFilterByCategory,
    loading
  }
}
