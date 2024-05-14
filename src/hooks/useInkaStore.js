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
    setLoading(true);
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

  const getInfoProduct = async(id) => {
    try {
      const {data} = await inkaApi.get(`/product/${id}`);
      return data;

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const ContactSend = async(data) => {
    try {
      const response = await inkaApi.post('/security/contact', data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
   }

  const uploadImage = async(image) => {
    try {
      const formData = new FormData();
      formData.append('desing', image);
      const response = await inkaApi.post('/sales/design', formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const payCartShopping = async(data) => {
    try {
      const response = await inkaApi.post('/sales/', data);
      console.log(response, "el envio")
      return response.data;
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
    payCartShopping,
    getInfoProduct,
    uploadImage,
    ContactSend,
    loading
  }
}
