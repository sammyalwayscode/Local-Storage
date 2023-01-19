import { useState, useEffect, createContext } from "react";
export const StateContext = createContext();

export const GlobalState = ({ children }) => {
  return (
    <StateContext.Provider value={"Samuel"}>{children}</StateContext.Provider>
  );
};
