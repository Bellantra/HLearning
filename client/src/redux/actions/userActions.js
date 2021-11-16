import axios from "axios";
import * as types from "../actions/constants";

export const postSignUp = (input) => {
  return async (dispatch) => {
    try {
      const { data, request } = await axios.post("/users/createUser", input);
      dispatch({ type: types.POST_SIGN_UP });
      if (request.status === 200) {
        const { email, password } = input;

        const { data, request } = await axios.post("/auth/login", {
          email,
          password,
        });
        if (request.status === 200) {
          if (data.token) {
            dispatch({ type: types.POST_SIGN_IN });
            window.localStorage.setItem("user", JSON.stringify(data.token));
            window.location.href = "/user";
          }
        } else {
          window.location.href = "/register";
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postSignIn = (input) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", input);
      if (data.token) {
        dispatch({ type: types.POST_SIGN_IN });
        window.localStorage.setItem("user", JSON.stringify(data.token));
        window.location.href = "/user";
      } else {
        window.location.href = "/register";
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getSignOut = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/auth/logout");
      if (data) {
        dispatch({ type: types.SIGN_OUT_SUCCESS });
        window.localStorage.removeItem("user");
        window.localStorage.clear();
        window.location.href = "/home";
      }
    } catch (error) {
      console.log(error.message);
      dispatch({ type: types.SIGN_OUT_FAILED });
    }
  };
};

export const getUserInfo = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.USER_AUTH_REQUEST });
      const token = JSON.parse(window.localStorage.getItem("user"));
      if (token) {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const { data, request } = await axios.get("/auth/user", config);
        if (request.status === 200) {
          dispatch({ type: types.USER_AUTH_SUCCESS, payload: data });
          dispatch(isAdmin());
        } else {
          dispatch({ type: types.USER_AUTH_FAILED });
        }
      }
    } catch (error) {
      console.log(error.message);
      dispatch({ type: types.USER_AUTH_FAILED });
      window.localStorage.removeItem("user");
    }
  };
};

export const isAdmin = () => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(window.localStorage.getItem("user"));
      if (token) {
        const { data, request } = await axios.post("/auth/admin", { token });
        if (request.status === 200) {
          dispatch({ type: types.ADMIN_AUTH_SUCCESS, payload: data });
        }
      }
    } catch (error) {
      dispatch({ type: types.ADMIN_AUTH_FAILED, payload: false });
      console.log(error.message);
    }
  };
};
