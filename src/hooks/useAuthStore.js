import { useDispatch, useSelector } from "react-redux";
import { inkaApi } from "../api/inkaApi";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";
import { useState } from "react";

export const useAuthStore = () => {

  const {status, id, user, message} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const startLogin = async({username, password}) => {
    
    dispatch(checkingCredentials());

    try {
      const {data} = await inkaApi.post('/security/login', {username, password});
      const {access, info_user, user} = data;
      localStorage.setItem('token', access);
      dispatch(login({ user: info_user.first_name, id: user, email:info_user.email ,confirmation: data.confirmation }));
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
      const {access, info_user, user} = data;
      localStorage.setItem('token', access);
      dispatch(login({ user: info_user.first_name, id: user, email:info_user.email ,confirmation: "Account verified"}));
    } catch (error) {
      localStorage.clear();
      dispatch(logout({detail: error.response.data.detail}));
    }
 }

 const restorePassword = async(email) => {
  setLoading(true);
  try {
    const {data} = await inkaApi.post('/security/password_reset', {email});
    return data;
  } catch (error) {
    console.log("error")
    console.log(error);
  } finally {
    setLoading(false);
  }
 }

 
 const confirmCode = async(email, code) => {
  setLoading(true);
  try {
    const {data} = await inkaApi.post('/security/password_reset', {email,code});
    return data;
  } catch (error) {
    console.log("error")
    console.log(error);
  } finally {
    setLoading(false);
  }
 }

 const registerUser = async(data) => {
  try {
    const response = await inkaApi.post('/security/register', data);
    console.log(response);
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
    user,
    id,
    loading,
    name,

    startLogin,
    checkAuthToken,
    registerUser,
    logoutUser,
    restorePassword,
    confirmCode
  }

};