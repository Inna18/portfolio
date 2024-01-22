import {createContext, useReducer} from "react";

export const ScrollContext = createContext();

const scrollReducer = (state, action) => {
  switch (action.type) {
    case "SCROLL":
      console.log({...state, menu: action.payload})
      return {...state, menu: action.payload}
    default:
      return state;
  }
}

export const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scrollReducer, {
    menu: "about"
  });

  const changeScroll = (to) => {
    dispatch({ type: "SCROLL", payload: to })
  }

  return (
    <ScrollContext.Provider value={{...state, changeScroll}}>
      { children }
    </ScrollContext.Provider>
  )
}
