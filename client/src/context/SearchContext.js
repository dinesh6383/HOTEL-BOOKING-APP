import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: "",
  checkIn: undefined,
  checkOut: undefined,
  peoples: {
    adult: null,
    children: null,
    room: null,
  },
};

export const searchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    case "ALTER_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);
  return (
    <searchContext.Provider
      value={{
        place: state.city,
        checkIn: state.checkIn,
        checkOut: state.checkOut,
        persons: state.peoples,
        dispatch,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
