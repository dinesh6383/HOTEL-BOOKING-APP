import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
  googleAuth: false,
};

export const authContext = createContext(INITIAL_STATE);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.data,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error,
      };
    case "GOOGLE_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.data,
        loading: false,
        error: null,
        googleAuth: action.status,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    case "GOOGLE_LOGOUT":
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        googleAuth: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        googleLogin: state.googleAuth,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
