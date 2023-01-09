import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  paymentSuccess: false,
  paymentFailure: false,
};

export const paymentContext = createContext(INITIAL_STATE);

const paymentReducer = (state, action) => {
  switch (action.type) {
    case "PAYMENT_SUCCESS":
      return {
        ...state,
        paymentSuccess: action.value,
      };
    case "PAYMENT_FAILURE":
      return {
        ...state,
        paymentFailure: action.value,
      };
    default:
      return state;
  }
};

export const PaymentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, INITIAL_STATE);
  return (
    <paymentContext.Provider
      value={{
        success: state.paymentSuccess,
        failure: state.paymentFailure,
        dispatch,
      }}
    >
      {children}
    </paymentContext.Provider>
  );
};
