import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  selectedRooms: [],
  roomIds: [],
  totalCost: null,
  selectedHotel: null,
};

export const roomContext = createContext(INITIAL_STATE);

const roomReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROOM":
      return {
        ...state,
        selectedRooms: [...state.selectedRooms, action.roomNum],
        roomIds: [...state.roomIds, action.roomId],
        totalCost: state.totalCost + action.price,
      };

    case "DELETE_ROOM":
      return {
        ...state,
        selectedRooms: state.selectedRooms.filter(
          (room) => room !== action.roomNum
        ),
        roomIds: state.roomIds.filter((id) => id !== action.roomId),
        totalCost: state.totalCost - action.price,
      };

    case "ADD_HOTEL":
      return {
        ...state,
        selectedHotel: action.hotel,
      };
    default:
      return state;
  }
};

export const RoomContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roomReducer, INITIAL_STATE);
  return (
    <roomContext.Provider
      value={{
        rooms: state.selectedRooms,
        total: state.totalCost,
        hotel: state.selectedHotel,
        ids: state.roomIds,
        dispatch,
      }}
    >
      {children}
    </roomContext.Provider>
  );
};
