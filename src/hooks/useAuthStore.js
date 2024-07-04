import { useDispatch, useSelector } from "react-redux";
import { inkaApi } from "../api/inkaApi";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";
import { useState } from "react";
import Swal from "sweetalert2";

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
      Swal.fire("Error", error.response.data.detail, "error");
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
    Swal.fire("Correo encontrado", data.msg, "success")
    return data;
  } catch (error) {
    Swal.fire("Error", error.response.data.msg, "error")
  } finally {
    setLoading(false);
  }
 }

 const changePassword = async(data) => {
  setLoading(true);
  try {
    const {msg} = await inkaApi.post('security/change_password', data);
    Swal.fire("Contraseña cambiada", msg, "success");
  } catch (error) {
    Swal.fire("Error", error.response.msg, "error");
  } finally {
    setLoading(false);
  }
 }
 

 const registerUser = async(data) => {
  try {
    const response = await inkaApi.post('/security/register', data);
    Swal.fire("Usuario registrado", response.data.msg, "success");
  } catch (error) {
    Swal.fire("Error", error.response.data.msg, "error");
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
    changePassword
  }

};