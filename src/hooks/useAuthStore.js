import { useDispatch, useSelector } from "react-redux";
import { inkaApi } from "../api/inkaApi";
import { checkingCredentials, login, logout } from "../store/auth/authSlice";

export const useAuthStore = () => {

  const {status, id, erroMessage} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startLogin = async({username, password}) => {
    
    dispatch(checkingCredentials());

    try {
      const {data} = await inkaApi.post('/security/login', {username, password})
      localStorage.setItem('token', data.access);
      dispatch(login({ user: data.user, confirmation: data.confirmation }));
    } catch (error) {
      dispatch(logout({detail: error.response.data.detail}))
    }
  }

  const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(logout({detail: 'No token found'}));
    try {
      dispatch(checkingCredentials());
      const {data} = await inkaApi.post('/security/token/verify/', {token: token});
      localStorage.setItem('token', data.access);
      dispatch(login({ user: data.user, confirmation: 'waaaazaaaa'}));
    } catch (error) {
      localStorage.clear();
      dispatch(logout({detail: error.response.data.detail}))
    }
 }

  return {
    erroMessage,
    status,
    id,

    startLogin,
    checkAuthToken,
  }

};