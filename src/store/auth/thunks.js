import { createUser } from "./Providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const SignIn = (data) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await createUser(data);
    if (result.status !== 'OK') return dispatch(logout(result.msg));
    dispatch(login(data));
  }
}
