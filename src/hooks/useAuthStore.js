import { useDispatch, useSelector } from "react-redux";
import { inkaApi } from "../api/inkaApi";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";
import { useState } from "react";

export const useAuthStore = () => {

  const {status, id, message} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const startLogin = async({username, password}) => {
    
    dispatch(checkingCredentials());

    try {
      const {data} = await inkaApi.post('/security/login', {username, password});
      localStorage.setItem('token', data.access);
      dispatch(login({ user: data.user, confirmation: data.confirmation }));
      return data;
    } catch (error) {
      dispatch(logout({detail: error.response.data.detail}));
    }
  }

  const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(logout({detail: 'No token found'}));
    inkaApi.defaults.headers.common.Authorization = "Bearer" + " " + token;
    try {
      dispatch(checkingCredentials());
      const {data} = await inkaApi.post('/security/token/verify/', {token: token});
      localStorage.setItem('token', data.access);
      dispatch(login({ user: data.user, confirmation: 'waaaazaaaa'}));
    } catch (error) {
      localStorage.clear();
      dispatch(logout({detail: error.response.data.detail}));
    }
 }

 const restorePassword = async(email) => {
  setLoading(true);
  try {
    const {data} = await inkaApi.post('/security/password_reset', email);
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
 }

 const registerUser = async(data) => {
  try {
    const response = await inkaApi.post('/security/register', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
 }

 const logoutUser = () => {
  localStorage.removeItem("token");
  dispatch(logout());
 }

  return {
    message,
    status,
    id,
    loading,

    startLogin,
    checkAuthToken,
    registerUser,
    logoutUser,
    restorePassword
  }

};