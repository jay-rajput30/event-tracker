import { createContext, useContext, useReducer } from "react";

const eventContext = createContext();
const initialState = [];
const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      const newEvent = [...state, payload];
      localStorage.setItem("events", JSON.stringify(newEvent));
      return [...state, payload];
    }

    case "REMOVE": {
      console.log("inside remove dispatch", state);
      const newEvent = state.filter((item) => item.id !== payload.id);
      localStorage.setItem("events", JSON.stringify(newEvent));
      return newEvent;
    }

    case "GET": {
      const newEvent = payload;
      // localStorage.setItem("events", JSON.stringify(newEvent));
      return newEvent;
    }

    case "EDIT": {
      const itemExcluded = state.filter((item) => item.id !== payload.id);
      const newEvents = [...itemExcluded, payload];
      // localStorage.setItem("events", JSON.stringify(newEvent));
      return newEvents;
    }

    default:
      return state;
  }
};
const EventProvider = ({ children }) => {
  const [state, eventDispatch] = useReducer(reducerFunc, initialState);
  return (
    <eventContext.Provider value={{ allEvents: state, eventDispatch }}>
      {children}
    </eventContext.Provider>
  );
};

export const useEvent = () => {
  return useContext(eventContext);
};

export default EventProvider;
