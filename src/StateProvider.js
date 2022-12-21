//Setup  data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";
//This is data Layer
export const StateContex = createContext();
//Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContex.Provider>
);

export const useStateValue = () => useContext(StateContex);
