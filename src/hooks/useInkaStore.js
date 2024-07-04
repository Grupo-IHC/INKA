import { useState } from "react";
import { inkaApi } from "../api/inkaApi";
import Swal from "sweetalert2";

export const useInkaStore = () => {

  const [loading, setLoading] = useState(false);


  const getTypeSeals = async() => {
    setLoading(true);
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
    setLoading(true);
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
    setLoading(true);
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

  const payCartShopping = async (data) => {
    setLoading(true);
    try {
      const response = await inkaApi.post('/sales/', data);
      Swal.fire('Compra realizada', response.data.message, 'success');
      return response.status;
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    } finally {
      setLoading(false);
    }
  }
  

  const getHistoryShopping = async() => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) return dispatch(logout({detail: 'No token found'}));
      inkaApi.defaults.headers.common.Authorization = "Bearer" + " " + token;
      const response = await inkaApi.get('/sales/shopping');
      return response.data;
    }catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const getSearchProduct = async(name) => {
    setLoading(true);
    try {
      const response = await inkaApi.get(`/product/filter?name=${name}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    } finally {
      setLoading(false);
    }
  }

  return {
    getTypeSeals,
    getTypeSealsById,
    getProductFilterByCategory,
    payCartShopping,
    getHistoryShopping,
    getInfoProduct,
    uploadImage,
    ContactSend,
    loading,
    getSearchProduct
  }
}
